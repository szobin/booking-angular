import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  logoImage: any = 'assets/img/header-logo-sml.png';
  userProfile: any = 'assets/img/user-profile-sml.png';
}
