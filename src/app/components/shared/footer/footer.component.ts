import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  year: Date = new Date();
  constructor() {}

  ngOnInit(): void {}
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title: string;

  user = { email: '' };

  userMenuItems = [
    {
      text: 'Profile',
      icon: 'user',
      onClick: () => {},
    },
    {
      text: 'Logout',
      icon: 'runner',
      onClick: () => {},
    },
  ];

  toggleMenu = () => {
    this.menuToggle.emit();
  };
}
