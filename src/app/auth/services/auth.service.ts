import {Injectable} from '@angular/core';

@Injectable({
              providedIn: 'root'
            })
export class AuthService {
  public isAuthenticated(): boolean {
    return localStorage.getItem('token') === 'fake_token';
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }
}
