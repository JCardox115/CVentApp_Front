
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService extends ErrorHandler {
  constructor() {
    super();
  }

  handleError(error: Error | HttpErrorResponse): void {
    console.log(error);
  }
}
