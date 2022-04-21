import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cities } from './city.model';
import { ListResponseModel } from '../shared/base/model/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  apiUrl: string = 'https://localhost:44327/api/Cities/getall';

  constructor(private httpClient: HttpClient) {}

  getCities(): Observable<ListResponseModel<Cities>> {
    return this.httpClient.get<ListResponseModel<Cities>>(this.apiUrl);
  }
}
