import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
              providedIn: 'root'
            })
export class GuardService implements CanActivate {

  constructor(public _authService: AuthService, public router: Router) {
  }

  public canActivate(): Observable<boolean> {
    return this._authService.isLoggedIn$
      .pipe(
        map((authState) => {
          if (!authState) {
            this.router.navigate(['/login']);
            return false;
          } else {
            return true;
          }
        }));
  }
}
