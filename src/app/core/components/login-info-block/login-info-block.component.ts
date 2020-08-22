import {Component} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
             selector: 'app-login-info-block',
             templateUrl: './login-info-block.component.html',
             styleUrls: ['./login-info-block.component.scss']
           })
export class LoginInfoBlockComponent {
  public name: string = localStorage.getItem('name');

  constructor(public auth: AuthService, public router: Router) {
  }

  public isAuthenticated(): boolean {
    return this.auth.isAuthenticated();
  }

  public logout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
