import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLoad = false;
  saveButtonOptions: any = [];
  formData: any;
  password = '';

  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent;

  constructor(private authService: AuthService, private router: Router) {
    this.saveButtonOptions = {
      text: 'Login',
      type: 'default',
      stylingMode: 'outlined',
      useSubmitBehavior: true,
      onClick: function () {},
    };
    this.isLoad = true;
  }

  ngOnInit(): void {}

  passwordOptions: any = {
    mode: 'password',
    value: this.password,
  };

  buttonOptions: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true,
  };

  passwordComparison = () => this.form.instance.option('formData').Password;

  checkComparison() {
    return true;
  }

  onFormSubmit = function (e: any) {
    notify(
      {
        message: 'You have submitted the form',
        position: {
          my: 'center top',
          at: 'center top',
        },
      },
      'success',
      3000
    );

    e.preventDefault();
  };
}
