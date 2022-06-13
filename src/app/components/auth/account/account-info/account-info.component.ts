import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { IpServiceService } from 'src/app/components/shared/service/ip-service.service';
import { RegisterModel, User } from '../../auth.model';
import { AuthService } from '../../auth.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css'],
})
export class AccountInfoComponent implements OnInit {
  isLoad = false;
  saveButtonOptions: any = [];
  formData: User;
  password = '';
  ipAddress: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tostrService: ToastrService,
    private ipService: IpServiceService,
    private accountService: AccountService,
    private jwtHelper: JwtHelperService
  ) {
    this.ipService.getIPAddress().subscribe((data: any) => {
      this.ipAddress = data.ip;
    });

    this.isLoad = true;
    this.saveButtonOptions = {
      text: 'Güncelle',
      type: 'default',
      stylingMode: 'outlined',
      useSubmitBehavior: true,
      class:
        'btn btn-block btn-lg text-body button-border justify-content-center mt-4',
      onClick: function () {},
    };
    this.isLoad = true;
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    let lcToken = localStorage.getItem('token');
    let token = this.jwtHelper.decodeToken(lcToken);
    this.accountService.getUserInfo(Number(token.iss)).subscribe((res) => {
      this.formData = res.data;
      this.formData.user_Password = '123456';
      console.log(res.data);
      this.isLoad = false;
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.formData.user_Ip = this.ipAddress;

    this.accountService.updateUserInfo(this.formData).subscribe((res) => {
      if (res.success) {
        this.tostrService.success(res.message, 'Başarılı', {
          progressAnimation: 'decreasing',
          progressBar: true,
          timeOut: 3000,
        });

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
