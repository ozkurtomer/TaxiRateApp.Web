import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.css'],
})
export class AccountMainComponent implements OnInit {
  constructor() {}
  selectedItem: string = 'Bilgilerim';
  ngOnInit(): void {}

  showForm(e, newValue) {
    this.selectedItem = newValue;
  }
}
