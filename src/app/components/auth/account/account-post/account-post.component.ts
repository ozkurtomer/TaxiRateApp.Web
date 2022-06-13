import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import { ToastrService } from 'ngx-toastr';
import { Post } from 'src/app/components/post/post.model';
import { PostService } from 'src/app/components/post/post.service';

@Component({
  selector: 'app-account-post',
  templateUrl: './account-post.component.html',
  styleUrls: ['./account-post.component.css'],
})
export class AccountPostComponent implements OnInit {
  @Input() userId: number;
  searchText: string;
  postDataSource: Post[] = [];
  dataLoaded: boolean = false;
  selectedRows: number[] = [];
  @ViewChild('dataGrid', { static: false }) dataGrid: DxDataGridComponent;
  constructor(
    private postService: PostService,
    private tostrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.detailClick = this.detailClick.bind(this);
    this.route.paramMap.subscribe((item) => {
      this.searchText = item.get('plateNo')!;
    });
  }

  ngOnInit(): void {
    this.fillDataSource();
  }

  onToolBarPreparing(e) {
    e.toolbarOptions.items.unshift(
      {
        location: 'before',
        widget: 'dxButton',
        options: {
          icon: 'refresh',
          onClick: this.fillDataSource(),
        },
      },
      {
        location: 'before',
        widget: 'dxButton',
        options: {
          icon: 'add',
          onClick: this.fillDataSource(),
        },
      }
    );
  }

  fillDataSource() {
    this.postService.getPostUser(this.userId).subscribe((res) => {
      if (res.success) {
        this.postDataSource = res.data;
        this.dataLoaded = true;
      } else {
        this.tostrService.error(res.message, 'Başarısız', {
          timeOut: 3000,
          progressAnimation: 'decreasing',
          progressBar: true,
        });
      }
    });
  }

  onSearchTextChange() {
    if (this.searchText.length === 0) {
      this.router.navigate(['/posts']);
    }
  }

  detailClick(e) {
    this.router.navigate(['/posts-detail', e.row.data.post_Id]);
  }
}
