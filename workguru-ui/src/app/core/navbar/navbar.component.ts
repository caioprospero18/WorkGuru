import { Component } from '@angular/core';
import { AuthService } from '../../security/auth.service';
import { JobService } from '../../jobs/job.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  displayingMenu = false;
  constructor(
    public auth: AuthService){ }

  login(){
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
