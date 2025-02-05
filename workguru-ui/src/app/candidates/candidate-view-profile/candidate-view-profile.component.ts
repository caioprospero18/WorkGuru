import { GraduationService } from './../../graduations/graduation.service';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { AuthService } from '../../security/auth.service';
import { CandidateService } from '../candidate.service';
import { Candidate, Graduation } from './../../core/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-candidate-view-profile',
  templateUrl: './candidate-view-profile.component.html',
  styleUrl: './candidate-view-profile.component.css'
})
export class CandidateViewProfileComponent implements OnInit{
  showIframe = false;
  iframeUrl: SafeResourceUrl;

  candidate: Candidate = new Candidate();
  graduation!: Graduation;
    constructor(
        private candidateService: CandidateService,
        private graduationService: GraduationService,
        private auth: AuthService,
        private errorHandler: ErrorHandlerService,
        private messageService: MessageService,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer)
      { this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/graduations/new');}

  ngOnInit(): void {
    const candidateId= this.route.snapshot.params[`id`];
    this.loadCandidate(candidateId);
    window.addEventListener('message', this.handleMessage.bind(this), false);

  }

  ngOnDestroy() {
    window.removeEventListener('message', this.handleMessage.bind(this));
  }

  handleMessage(event: MessageEvent) {
    if (event.data === 'hideIframe') {
      this.showIframe = false;
    }
  }

  loadCandidate(id: number) {
    this.candidateService.findById(id)
      .then(candidate => {
        this.candidate = candidate;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  toggleIframe() {
    this.showIframe = !this.showIframe;
  }

  loadGraduation(id: number) {
    this.graduationService.findById(id)
      .then(graduation => {
        this.graduation = graduation;
      })
      .catch(error => this.errorHandler.handle(error));
  }
}
