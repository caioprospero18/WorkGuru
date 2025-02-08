import { Component, OnInit } from '@angular/core';

import { JobService } from '../../jobs/job.service';
import { AuthService } from '../../security/auth.service';


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
