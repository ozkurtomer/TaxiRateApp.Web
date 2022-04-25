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
      text: 'Kaydet',
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
      notify(
        {
          message: 'Giriş Yapılıyor...',
          position: {
            my: 'center top',
            at: 'center top',
          },
        },
        'success',
        3000
      );
    });

    e.preventDefault();
  }
}
