import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UUID } from 'angular2-uuid';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from '../../auth/auth.model';
import { AuthService } from '../../auth/auth.service';
import { IpServiceService } from '../../shared/service/ip-service.service';
import { Comments, Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  postId: string;
  post: Post = null;
  dataLoaded: boolean = false;
  saveButtonOptions: any = [];
  formData: Comments;
  ipAddress: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private tostrService: ToastrService,
    private ipService: IpServiceService,
    private authService: AuthService,
    private jwtHelper: JwtHelperService
  ) {
    this.ipService.getIPAddress().subscribe((data: any) => {
      this.ipAddress = data.ip;
    });

    this.saveButtonOptions = {
      text: 'Yorumu Gönder',
      type: 'default',
      stylingMode: 'outlined',
      useSubmitBehavior: true,
      class:
        'btn btn-block btn-lg text-body button-border justify-content-center mt-4',
      onClick: function () {},
    };
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((item) => {
      this.getDetailWithId(item.get('id')!);
    });
  }

  getDetailWithId(postId: string) {
    this.postService.getDetailWithId(postId).subscribe((res) => {
      this.post = res.data;
      this.dataLoaded = true;
    });
  }

  updatePostLikeCount() {
    this.post.post_LikeCount = this.post.post_LikeCount + 1;
    debugger;
    this.postService.updatePostLikeCount(this.post).subscribe((res) => {
      if (res.success) {
        this.tostrService.success(res.message, 'Başarılı', {
          progressAnimation: 'decreasing',
          progressBar: true,
          timeOut: 3000,
        });
        this.ngOnInit();
      } else {
        this.tostrService.error(res.message, 'Başarısız', {
          progressAnimation: 'decreasing',
          progressBar: true,
          timeOut: 3000,
        });
      }
    });
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
    this.formData.post_Id = this.post.post_Id;
    const token: any = this.jwtHelper.decodeToken(
      localStorage.getItem('token')
    );
    let userId = token?.iss;

    if (!token) {
      await this.createUser().then((res) => {
        userId = res;
      });
    }

    this.formData.user_Id = userId;
    debugger;

    this.postService.saveComment(this.formData).subscribe((res) => {
      if (res.success) {
        this.tostrService.success(res.message, 'Başarılı', {
          progressAnimation: 'decreasing',
          progressBar: true,
          timeOut: 3000,
        });
        setTimeout(() => {
          this.formData = new Comments();
          this.ngOnInit();
        }, 3000);
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
