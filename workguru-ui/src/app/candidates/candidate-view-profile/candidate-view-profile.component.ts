import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { AuthService } from '../../security/auth.service';
import { CandidateService } from '../candidate.service';
import { Candidate, Graduation } from './../../core/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-candidate-view-profile',
  templateUrl: './candidate-view-profile.component.html',
  styleUrl: './candidate-view-profile.component.css'
})
export class CandidateViewProfileComponent implements OnInit{

  candidate: Candidate = new Candidate();
    constructor(
        private candidateService: CandidateService,
        private auth: AuthService,
        private errorHandler: ErrorHandlerService,
        private messageService: MessageService,
        private route: ActivatedRoute,
        private title: Title)
      { }

  ngOnInit(): void {
    const candidateId= this.route.snapshot.params[`id`];
    console.log(candidateId);
    this.loadCandidate(candidateId);

  }

  loadCandidate(id: number) {
    this.candidateService.findById(id)
      .then(candidate => {
        this.candidate = candidate;
      })
      .catch(error => this.errorHandler.handle(error));
  }


}
