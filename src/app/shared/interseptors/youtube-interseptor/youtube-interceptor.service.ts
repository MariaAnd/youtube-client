import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  constructor() {
  }

  public intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    let request: HttpRequest<string>;
    if (req.url.includes('/assets/')) {
      request = req;
    } else {
      request = req.clone({
                            url: `https://www.googleapis.com/youtube/v3${req.url}`,
                            params: req.params.set('key', 'AIzaSyDb__VhFR-0cA24aR_KOsYJQBwgpPYByv8')
                          });
    }

    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
          }
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            console.log('Error');
          }
        }
      )
    );
  }
}
