import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-last-five',
  templateUrl: './post-last-five.component.html',
  styleUrls: ['./post-last-five.component.css'],
})
export class PostLastFiveComponent implements OnInit {
  posts: Post[] = [];
  dataCount: number = 0;
  dataLoaded: boolean = false;
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.getLastFivePosts();
  }

  getLastFivePosts() {
    this.postService.getLastFivePosts().subscribe((response) => {
      if (response.success) {
        this.posts = response.data;
        this.dataCount = response.data.length;
        this.dataLoaded = true;
        console.log(this.posts[0].post_Stars);
      }
    });
  }

  showDetailPost(post: Post) {
    this.router.navigate(['/posts-detail', post.post_Id]);
  }
}
