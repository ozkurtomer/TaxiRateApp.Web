import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  GetResponseModel,
  ListResponseModel,
} from '../shared/base/model/responseModel/listResponseModel';
import { ResponseModel } from '../shared/base/model/responseModel/responseModel';
import { Comments, Post } from './post.model';

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

  getAllPosts(): Observable<ListResponseModel<Post>> {
    return this.httpClient.get<ListResponseModel<Post>>(
      environment.apiUrl + '/Posts/getpostshomescreen'
    );
  }

  getPostsWithPlateNo(plateNo: string): Observable<ListResponseModel<Post[]>> {
    return this.httpClient.post<ListResponseModel<Post[]>>(
      environment.apiUrl + '/Posts/getpostswithplateno',
      { plateNo: plateNo }
    );
  }

  getDetailWithId(postIds: string): Observable<GetResponseModel<Post>> {
    console.log(postIds);
    return this.httpClient.get<GetResponseModel<Post>>(
      environment.apiUrl + '/Posts/getdetailwithid?postId=' + postIds
    );
  }

  savePost(post: Post): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      environment.apiUrl + '/Posts/add',
      post
    );
  }

  saveComment(comment: Comments): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      environment.apiUrl + '/comment/add',
      comment
    );
  }
}
