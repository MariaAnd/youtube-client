import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
             selector: 'app-login-form',
             templateUrl: './login-form.component.html',
             styleUrls: ['./login-form.component.scss']
           })
export class LoginFormComponent implements OnInit {
  public messageAlert = 'Invalid credentials';
  public  authFailed = false;
  constructor(private router: Router) {
  }

  public username: string;
  public password: string;

  public ngOnInit() : void {
  }

  public login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('token', 'fake_token');
      this.router.navigate(['youtube']);
    } else {
      this.authFailed = true;
    }
  }
}
