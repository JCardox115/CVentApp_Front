import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, finalize, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/app-core/core/services/loading.service';
import { MessageService } from 'src/app/app-core/core/services/message.service';
import { environment } from 'src/environments/environment';
import { AppInsights } from 'applicationinsights-js';
import { OAuthAccessService } from 'src/app/app-core/core/services/oauth.access.services';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
    private config: Microsoft.ApplicationInsights.IConfig = {
        instrumentationKey: environment.appInsights.instrumentationKey
    };

    constructor(readonly loadingService: LoadingService,
                readonly messageService: MessageService,
                private oauthAccessService: OAuthAccessService) {
        if (!AppInsights.config) {
            AppInsights.downloadAndSetup(this.config);
        }
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.showLoading();
        return next.handle(this.addSubscriptionKey(request))
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    if (error.status !== 401) {
                        this.loadingService.hideLoading();
                        this.messageService.validateError(error.status, error);
                    }

                    return throwError(error);
                }),
                finalize(() => {
                    this.loadingService.hideLoading();
                }),
                tap((resp: HttpResponse<any>) => {
                    this.messageService.validateSuccess(resp);

                    return resp;
                })
            );
    }

    addSubscriptionKey(request: HttpRequest<any>) {
        return request.clone({
            setHeaders: {
                'Ocp-Apim-Subscription-Key': environment.subscriptionKey,
                Authorization: `Bearer ${this.oauthAccessService.getAccessToken}`
            }
        });
    }
}
