import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css'],
})
export class SearchAreaComponent implements OnInit {
  searchText: string = '';

  constructor(
    private postService: PostService,
    private toastService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  searchPost() {
    if (this.searchText.length < 5) {
      this.toastService.warning(
        'Lütfen aramak istediğiniz plakayı giriniz',
        'Bilgi',
        {
          timeOut: 3000,
          progressAnimation: 'decreasing',
          progressBar: true,
        }
      );
    } else {
      this.router.navigate(['/posts'], {});
    }
  }

  setSearchText(e) {
    this.searchText = e.target.value;
  }
}
