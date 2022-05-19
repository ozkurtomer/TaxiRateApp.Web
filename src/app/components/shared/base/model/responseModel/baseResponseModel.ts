import { ResponseModel } from './responseModel';

export class BaseResponseModel<T> extends ResponseModel {
  data: T;
}
