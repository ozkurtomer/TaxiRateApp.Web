import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.css'],
})
export class PostAllComponent implements OnInit {
  customersData: any;

  shippersData: any;

  dataSource: any;

  url: string;

  masterDetailDataSource: any;
  constructor() {}

  ngOnInit(): void {}
}
