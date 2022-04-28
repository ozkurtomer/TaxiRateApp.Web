import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import notify from 'devextreme/ui/notify';
import { DxFormComponent } from 'devextreme-angular';
import { LoginModel } from '../auth.model';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoad = false;
  saveButtonOptions: any = [];
  formData: LoginModel;

  constructor(private authService: AuthService, private router: Router) {
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
  }

  buttonOptions: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true,
  };

  onFormSubmit(e) {
    this.authService.login(this.formData).subscribe((res) => {
      if (res.success) {
        notify(
          {
            message: 'Başarılı. Ana sayfaya yönlendiriliyorsunuz.',
            position: {
              my: 'right top',
              at: 'right top',
            },
            width: 350,
          },
          'success',
          1000
        );

        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userName', res.data.userName);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      } else {
        notify(
          {
            message: res.message,
            position: {
              my: 'right top',
              at: 'right top',
            },
            width: 350,
          },
          'warning',
          3000
        );
      }
    });

    e.preventDefault();
  }
}
