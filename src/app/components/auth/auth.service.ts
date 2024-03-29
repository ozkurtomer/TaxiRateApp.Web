import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponseModel } from '../shared/base/model/responseModel/baseResponseModel';
import { AccessToken, LoginModel, RegisterModel } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  ipAddress: string;
  public login(
    loginModel: LoginModel
  ): Observable<BaseResponseModel<AccessToken>> {
    return this.httpClient.post<BaseResponseModel<AccessToken>>(
      environment.apiUrl + '/auth/login',
      loginModel
    );
  }

  register(
    registerModel: RegisterModel
  ): Observable<BaseResponseModel<AccessToken>> {
    return this.httpClient.post<BaseResponseModel<AccessToken>>(
      environment.apiUrl + '/auth/register',
      registerModel
    );
  }

  getIPAddress(): any {
    this.httpClient
      .get('http://api.ipify.org/?format=json')
      .subscribe((res: any) => {
        return res.ip;
      });
  }
}
