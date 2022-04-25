import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessToken, LoginModel, RegisterModel } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public login(loginModel: LoginModel): Observable<AccessToken> {
    return this.httpClient.post<AccessToken>(
      environment.apiUrl + '/auth/login',
      loginModel
    );
  }

  register(registerModel: RegisterModel): Observable<AccessToken> {
    return this.httpClient.post<AccessToken>(
      environment.apiUrl + '/auth/register',
      registerModel
    );
  }
}
