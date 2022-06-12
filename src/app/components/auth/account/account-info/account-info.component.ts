import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IpServiceService } from 'src/app/components/shared/service/ip-service.service';
import { RegisterModel } from '../../auth.model';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  isLoad = false;
  saveButtonOptions: any = [];
  formData: RegisterModel;
  password = '';
  ipAddress: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tostrService: ToastrService,
    private ipService: IpServiceService
  ) {
    this.ipService.getIPAddress().subscribe((data: any) => {
      this.ipAddress = data.ip;
    });

    this.isLoad = true;
    this.saveButtonOptions = {
      text: 'Kayıt Ol',
      type: 'default',
      stylingMode: 'outlined',
      useSubmitBehavior: true,
      class:
        'btn btn-block btn-lg text-body button-border justify-content-center mt-4',
      onClick: function () {},
    };
    this.isLoad = true;
  }

  ngOnInit(): void {}

  confirmPassword = (e: { value: string }) => {
    return e.value === this.formData.UserPassword;
  };

  onFormSubmit(e) {
    e.preventDefault();
    this.formData.UserIpAddress = this.ipAddress;

    this.authService.register(this.formData).subscribe((res) => {
      if (res.success) {
        this.tostrService.success(res.message, 'Başarılı', {
          progressAnimation: 'decreasing',
          progressBar: true,
          timeOut: 3000,
        });

        localStorage.setItem('token', res.data.token);
        this.router.navigate(['/home']);
      } else {
        this.tostrService.error(res.message, 'Başarısız', {
          progressAnimation: 'decreasing',
          progressBar: true,
          timeOut: 3000,
        });
      }
    });
  }
}
