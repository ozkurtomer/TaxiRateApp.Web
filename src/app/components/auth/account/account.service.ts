import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponseModel } from '../../shared/base/model/responseModel/baseResponseModel';
import { GetResponseModel } from '../../shared/base/model/responseModel/listResponseModel';
import { User } from '../auth.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  getUserInfo(userId: number): Observable<BaseResponseModel<User>> {
    debugger;
    let url = environment.apiUrl + '/users/getuser?userId=' + userId;
    return this.httpClient.get<GetResponseModel<User>>(
      environment.apiUrl + '/user/getuser?userId=' + userId
    );
  }

  updateUserInfo(user: User): Observable<BaseResponseModel<User>> {
    return this.httpClient.post<BaseResponseModel<User>>(
      environment.apiUrl + '/user/updateuser',
      user
    );
  }
}
