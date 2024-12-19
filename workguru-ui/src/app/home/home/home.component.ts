import { Component } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { JobService } from '../jobs/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private auth: AuthService,
    private jobService: JobService
  ){}

  login(){
    this.auth.login();
  }
}
