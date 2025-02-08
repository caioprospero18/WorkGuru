import { Component } from '@angular/core';
import { AuthService } from '../../security/auth.service';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrl: './nav-home.component.css'
})
export class NavHomeComponent {

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
