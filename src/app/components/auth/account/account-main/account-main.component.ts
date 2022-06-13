import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-account-main',
  templateUrl: './account-main.component.html',
  styleUrls: ['./account-main.component.css'],
})
export class AccountMainComponent implements OnInit {
  userId: number;

  constructor(private jwtHelper: JwtHelperService) {}
  selectedItem: string = 'Bilgilerim';
  ngOnInit(): void {
    let lcToken = localStorage.getItem('token');
    let token = this.jwtHelper.decodeToken(lcToken);
    this.userId = token.iss;
  }

  showForm(e, newValue) {
    this.selectedItem = newValue;
  }
}
