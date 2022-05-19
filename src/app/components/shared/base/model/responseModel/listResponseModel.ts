import { ResponseModel } from './responseModel';

export interface ListResponseModel<T> extends ResponseModel {
  data: T[];
}

export interface GetResponseModel<T> extends ResponseModel {
  data: T;
}
