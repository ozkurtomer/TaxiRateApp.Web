import { ResponseModel } from './responseModel';

export interface BaseResponseModel<T> extends ResponseModel {
  data: T;
}
