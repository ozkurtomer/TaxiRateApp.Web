import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private tostrService: ToastrService
  ) {
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

  updatePostLikeCount() {}

  onFormSubmit(e) {
    this.formData.post_Id = this.post.post_Id;

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
