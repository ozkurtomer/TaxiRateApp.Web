import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UUID } from 'angular2-uuid';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel, User } from '../../auth/auth.model';
import { AuthService } from '../../auth/auth.service';
import { Cities } from '../../city/city.model';
import { CityService } from '../../city/city.service';
import { IpServiceService } from '../../shared/service/ip-service.service';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css'],
})
export class PostAddComponent implements OnInit {
  formData: Post;
  likeCount: number = 0;
  cityId: number = 0;
  isLoad: boolean = false;
  saveButtonOptions: any = [];
  selectBoxEditorOptions: any = [];
  cities: Cities[] = this.fillCities();
  ipAddress: string;

  constructor(
    private cityService: CityService,
    private postService: PostService,
    private tostrService: ToastrService,
    private router: Router,
    private ipService: IpServiceService,
    private authService: AuthService,
    private jwtHelper: JwtHelperService
  ) {
    this.ipService.getIPAddress().subscribe((data: any) => {
      this.ipAddress = data.ip;
    });

    this.saveButtonOptions = {
      text: 'Paylaş',
      type: 'default',
      stylingMode: 'outlined',
      useSubmitBehavior: true,
      class:
        'btn btn-block btn-lg text-body button-border justify-content-center mt-4',
      onClick: function () {},
    };

    this.selectBoxEditorOptions = {
      items: this.cities,
      stylingMode: 'filled',
      dataField: 'city_Id',
      placeholder: 'Şehir Seçiniz',
      searchEnabled: true,
      displayExpr: 'city_Name',
      valueExpr: 'city_Id',
      onValueChanged: this.setCityId.bind(this),
    };
  }

  ngOnInit(): void {}

  setCityId(e): void {
    this.cityId = e.value;
  }

  fillCities(): any {
    let object: any = [];
    this.cityService.getAllCities().subscribe((data) => {
      this.cities = data.data;
      this.cities.forEach((element) => {
        object.push({ city_Id: element.city_Id, city_Name: element.city_Name });
      });
      this.isLoad = true;
    });
    return object;
  }

  setLikeCount(likeCount: number) {
    this.likeCount = likeCount;
  }

  async createUser(): Promise<any> {
    return new Promise((resolve) => {
      let user = new RegisterModel();
      user.UserAnonymous = true;
      user.UserUserName = UUID.UUID();
      user.UserIpAddress = this.ipAddress;
      user.UserPassword = UUID.UUID();
      this.authService.register(user).subscribe((res) => {
        let token = this.jwtHelper.decodeToken(res.data.token);
        resolve(token.iss);
      });
    });
  }

  async onFormSubmit(e) {
    const token: any = this.jwtHelper.decodeToken(
      localStorage.getItem('token')
    );
    let userId = token?.iss;

    if (!token) {
      await this.createUser().then((res) => {
        userId = res;
      });
    }

    this.formData.post_Stars = this.likeCount;
    this.formData.post_LikeCount = 0;
    this.formData.city_Id = this.cityId;
    this.formData.post_CreatedDate = new Date();

    this.formData.user_Id = userId;

    this.postService.savePost(this.formData).subscribe((res) => {
      if (res.success) {
        this.tostrService.success(res.message, 'Başarılı', {
          progressAnimation: 'decreasing',
          progressBar: true,
          timeOut: 3000,
        });
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 3000);
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
