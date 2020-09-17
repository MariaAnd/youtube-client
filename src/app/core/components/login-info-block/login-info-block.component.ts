import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
             selector: 'app-login-info-block',
             templateUrl: './login-info-block.component.html',
             styleUrls: ['./login-info-block.component.scss']
           })
export class LoginInfoBlockComponent implements OnInit {
  public isAuthenticated: boolean;
  public name: string = localStorage.getItem('name');

  constructor(public _authService: AuthService, public router: Router) {
  }

  public logout(): void {
    this._authService.changeAuthStatus(false);
    this.router.navigate(['login']);
  }

  public ngOnInit(): void {
    this._authService.isLoggedIn$.subscribe(value => {
      this.isAuthenticated = value;
    });
  }
}
