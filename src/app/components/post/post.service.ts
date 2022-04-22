import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../shared/base/model/responseModel/listResponseModel';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getLastFivePosts(): Observable<ListResponseModel<Post>> {
    return this.httpClient.get<ListResponseModel<Post>>(
      environment.apiUrl + '/Posts/getpostshomescreen'
    );
  }
}
