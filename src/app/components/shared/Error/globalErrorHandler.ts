import { ErrorHandler, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private tostrService: ToastrService) {}

  handleError(error: any) {
    this.tostrService.success(error, 'Hata', {
      progressAnimation: 'decreasing',
      progressBar: true,
      timeOut: 3000,
    });
  }
}
