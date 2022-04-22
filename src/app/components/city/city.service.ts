import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cities } from './city.model';
import { ListResponseModel } from '../shared/base/model/responseModel/listResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private httpClient: HttpClient) {}

  getCities(): Observable<ListResponseModel<Cities>> {
    return this.httpClient.get<ListResponseModel<Cities>>(
      environment.apiUrl + '/Cities/getpopularfivecity'
    );
  }
}
