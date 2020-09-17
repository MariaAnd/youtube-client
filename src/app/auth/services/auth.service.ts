import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class AuthService {
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(this.checkToken());

  public removeToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }

  public setToken(): void {
    localStorage.setItem('token', 'fake_token');
  }

  public setUsername(name: string): void {
    localStorage.setItem('name', name);
  }

  public checkToken(): boolean {
    return !!localStorage.getItem('token');
  }

  public changeAuthStatus(status: boolean): void {
    if (status) {
      this.setToken();
    } else {
      this.removeToken();
    }
    this.isLoggedIn$.next(status);
  }
}
