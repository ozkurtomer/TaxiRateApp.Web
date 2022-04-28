import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  constructor() {
    this.ngOnInit();
  }
  userName: string = '';
  isLoggedIn: boolean = true;

  ngOnInit(): void {
    var userName = localStorage.getItem('userName');
    if (userName != null) {
      this.isLoggedIn = false;
      this.userName = userName;
    }
  }

  logOut(): void {
    localStorage.clear();
    window.location.reload();
  }
}
