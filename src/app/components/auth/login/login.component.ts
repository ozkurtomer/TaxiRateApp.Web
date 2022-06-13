import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginModel } from '../auth.model';
import { ToastrService } from 'ngx-toastr';
import dxBarGauge from 'devextreme/viz/bar_gauge';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoad = false;
  saveButtonOptions: any = [];
  formData: LoginModel;
  rememberMe: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tostrService: ToastrService
  ) {
    this.saveButtonOptions = {
      text: 'Giriş Yap',
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
    this.isLoad = false;
    debugger;
    if (localStorage.getItem('rememberMe')) {
      this.formData = new LoginModel();
      this.formData.rememberMe = true;
      this.formData.UserEmail = localStorage.getItem('email');
    }
  }

  buttonOptions: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true,
  };

  onFormSubmit(e) {
    this.authService.login(this.formData).subscribe((res) => {
      if (res.success) {
        this.tostrService.success(res.message, 'Başarılı', {
          progressAnimation: 'decreasing',
          progressBar: true,
          timeOut: 3000,
        });
        if (this.formData.rememberMe) {
          localStorage.setItem('rememberMe', 'true');
          localStorage.setItem('email', this.formData.UserEmail);
        }
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userName', res.data.userName);
        this.router.navigate(['/home']);
      } else {
        this.tostrService.error(res.message, 'Başarısız', {
          progressAnimation: 'decreasing',
          progressBar: true,
          timeOut: 3000,
        });
      }
    });

    e.preventDefault();
  }
}
