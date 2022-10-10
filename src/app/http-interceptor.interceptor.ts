import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor() {
    console.log('interceptor called');
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let headers: HttpHeaders = request.headers;
    headers.append('My Header ', '123');
    request = request.clone({
      setHeaders: {
        Authorization: 'my token',
      },
    });
    console.log('My Request', request);
    return next.handle(request).pipe(
      /* to retry and timeout
     retry(2),
     timeout(100),  */

      tap((event: HttpEvent<any>) => {
        if (
          event instanceof HttpResponse &&
          (event.status === 200 || event.status === 201)
        ) {
          console.log('Success :', event);
        }
      }),
      catchError((errResponse: HttpErrorResponse) => {
        console.log('error', errResponse);

        return throwError(errResponse);
      })
    );
  }
}
