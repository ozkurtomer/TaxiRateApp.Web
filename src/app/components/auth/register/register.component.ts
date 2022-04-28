import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { RegisterModel } from '../auth.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLoad = false;
  saveButtonOptions: any = [];
  formData: RegisterModel;
  password = '';

  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent;

  constructor(private authService: AuthService, private router: Router) {
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
    console.log(this.formData);
    console.log(this.formData.UserPassword);
    console.log(e.value);
    return e.value === this.formData.UserPassword;
  };

  onFormSubmit(e) {
    e.preventDefault();
    this.authService.register(this.formData).subscribe((res) => {
      if (res.success) {
        notify(
          {
            message: 'Hesabınız başarılı bir şekilde oluşturuldu.',
            position: {
              my: 'right top',
              at: 'right top',
            },
          },
          'success',
          1000
        );
        localStorage.setItem('token', res.data.token);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      } else {
        notify(
          {
            message: res.message,
            position: {
              my: 'right top',
              at: 'right top',
            },
          },
          'success',
          2000
        );
      }
    });
  }
}
