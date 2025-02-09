import { GraduationService } from './../../graduations/graduation.service';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { AuthService } from '../../security/auth.service';
import { CandidateService } from '../candidate.service';
import { Candidate, Graduation, ProfessionalHistory } from './../../core/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-candidate-view-profile',
  templateUrl: './candidate-view-profile.component.html',
  styleUrl: './candidate-view-profile.component.css'
})
export class CandidateViewProfileComponent implements OnInit{
  showIframeGraduation = false;
  showIframeHistory = false;
  iframeUrl: SafeResourceUrl;

  candidate: Candidate = new Candidate();
  graduations: Graduation[] = [];
  professionalHistories: ProfessionalHistory[] = [];
    constructor(
        private candidateService: CandidateService,
        private errorHandler: ErrorHandlerService,
        private route: ActivatedRoute,
        public auth: AuthService,
        private sanitizer: DomSanitizer)
      { this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/graduations/new'),
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/professional_histories/new');}

  ngOnInit(): void {
    const candidateId= this.route.snapshot.params[`id`];
    this.loadCandidate(candidateId);
    window.addEventListener('message', this.handleMessage.bind(this), false);

  }

  ngOnDestroy() {
    window.removeEventListener('message', this.handleMessage.bind(this));
  }

  handleMessage(event: MessageEvent) {
    if (event.data === 'hideIframeGraduation') {
      this.showIframeGraduation = false;
    }
    if (event.data === 'hideIframeHistory') {
      this.showIframeHistory = false;
    }
  }

  loadCandidate(id: number) {
    this.candidateService.findById(id)
      .then(candidate => {
        this.candidate = candidate;

      if (candidate.graduations && candidate.graduations.length > 0) {
          this.graduations = candidate.graduations;
      }
      if (candidate.professionalHistories && candidate.professionalHistories.length > 0) {
        this.professionalHistories = candidate.professionalHistories;
      }
      })
      .catch(error => this.errorHandler.handle(error));
  }

  toggleIframeGraduation() {
    this.showIframeGraduation = !this.showIframeGraduation;
  }

  toggleIframeHistory() {
    this.showIframeHistory = !this.showIframeHistory;
  }


  showDegree(graduation:Graduation): string{
        if(graduation.degree == 'BACHARELADO'){
          return 'Bacharelado'
        } else if (graduation.degree == 'LICENCIATURA'){
          return 'Licenciatura'
        } else if (graduation.degree == 'TECNOLOGO'){
          return 'Tecnólogo'
        }else if (graduation.degree == 'MESTRADO'){
          return 'Mestrado'
        }else if (graduation.degree == 'DOUTORADO'){
          return 'Doutorado'
        }else if (graduation.degree == 'POS_DOUTORADO'){
          return 'Pós-doutorado'
        }else if (graduation.degree == 'TECNICO'){
          return 'Técnico'
        }else {
          return 'Ensino médio'
        }
      }
}
