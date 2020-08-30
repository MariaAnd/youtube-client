import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
             selector: 'app-login-form',
             templateUrl: './login-form.component.html',
             styleUrls: ['./login-form.component.scss']
           })
export class LoginFormComponent implements OnInit {
  public messageAlert: string = 'Invalid credentials';
  public authFailed: boolean = false;
  public username: string;
  public password: string;

  constructor(private router: Router, private authService: AuthService) {
  }

  public ngOnInit(): void {
  }

  public login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.authService.changeAuthStatus(true);
      this.authService.setUsername('admin');
      this.router.navigate(['youtube']);
    } else {
      this.authFailed = true;
    }
  }
}
