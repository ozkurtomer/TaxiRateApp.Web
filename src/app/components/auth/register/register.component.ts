import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private authService: AuthService,
    private router: Router,
    private tostrService: ToastrService
  ) {
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
