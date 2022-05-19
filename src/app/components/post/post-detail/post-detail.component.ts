import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';
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

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((item) => {
      console.log(parseInt(item.get('id')!));
      this.getDetailWithId(item.get('id')!);
    });
  }

  getDetailWithId(postId: string) {
    this.postService.getDetailWithId(postId).subscribe((res) => {
      console.log(res.data);
      this.post = res.data;
      this.dataLoaded = true;
    });
  }

  updatePostLikeCount() {}
}
