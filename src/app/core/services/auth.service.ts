import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Login, Register, loginResponse } from '../interfaces/auth';
import { Observable, tap } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  get token() {
    return localStorage.getItem('token');
  }

  login(payload: Login): Observable<loginResponse> {
    return this.post('auth/login', payload);
  }

  register(payload: Register): Observable<User> {
    return this.post('auth/signup', payload);
  }

  setToken(token: string) {
    return localStorage.setItem('token', token);
  }

  setUser(user: string) {
    return localStorage.setItem('user', user);
  }
}
