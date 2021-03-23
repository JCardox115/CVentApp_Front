import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseGenericSimpleService } from './basegeneric.simple.services';
import { Filters } from '../objects/filter.object';


export class BaseGenericService<T> extends BaseGenericSimpleService {
  refeshList = false;

  constructor(readonly http: HttpClient, api: string, urlBaseAPI: string = '') {
    super(http, api, urlBaseAPI);
  }

  private refreshData(): HttpHeaders {
    let headers = new HttpHeaders();

    if (this.refeshList) {
      headers = headers.set('reset-cache', 'true');
    }

    return headers;
  }

  update(ObjEntidad: T) {
    return this.put(ObjEntidad);
  }

  create(ObjEntidad: T) {
    return this.post(ObjEntidad);
  }

  getFileExterno(externo: string, method: string) {
    return this.http.get(`${this.baseExternalAPI + externo}/${method}`, {
      reportProgress: true,
      responseType: 'blob',
      observe: 'response',
    });
  }

  getFile(method: string) {
    const newFilters: Filters[] = [];
    return this.http.get(`${this.baseAPI}/${method}`, {
      reportProgress: true,
      responseType: 'blob',
      observe: 'response',
    });
  }

  postFileExterno<TValue>(externo: string, method: string, ObjEntidad: TValue) {
    return this.http.post(
      `${this.baseExternalAPI + externo}/${method}`,
      JSON.stringify(ObjEntidad),
      {
        reportProgress: true,
        responseType: 'blob',
        observe: 'response',
      }
    );
  }

  postFile<TValue>(method: string, ObjEntidad: TValue) {
    return this.http.post(
      `${this.baseAPI}/${method}`,
      JSON.stringify(ObjEntidad),
      {
        reportProgress: true,
        responseType: 'blob',
        observe: 'response',
      }
    );
  }

  exportFile(method: string, company: number, filters: Filters[] = null) {
    if (!filters) {
      filters = [
        {
          name: 'string',
          values: [
            null
          ]
        }
      ];
    }

    if (company === null) {
      return this.http.post(`${this.baseAPI}/${method}`, filters, {
        reportProgress: true,
        responseType: 'blob',
        observe: 'response',
        headers: { 'Content-Type': 'application/json' }
      },
      );
    } else {
      return this.http.post(`${this.baseAPI}/${method}/${company}`, filters, {
        reportProgress: true,
        responseType: 'blob',
        observe: 'response',
        headers: { 'Content-Type': 'application/json' }
      },
      );
    }
  }
}
