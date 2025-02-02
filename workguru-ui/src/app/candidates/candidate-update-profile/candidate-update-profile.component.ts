import { Component } from '@angular/core';
import { Address, Candidate } from '../../core/models';
import { CandidateService } from '../candidate.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidate-update-profile',
  templateUrl: './candidate-update-profile.component.html',
  styleUrl: './candidate-update-profile.component.css'
})
export class CandidateUpdateProfileComponent {

  candidate!: Candidate;
  address! : Address;

  genders = [
    { label: 'Masculino', value: 'MASCULINO' },
    { label: 'Feminino', value: 'FEMININO' },
    { label: 'Outro', value: 'OUTRO' }
  ];

  statuses = [
    { label: 'Trabalhando', value: 'TRABALHANDO' },
    { label: 'Trabalhando mas aceito ofertas', value: 'TRABALHANDO_MAS_ACEITO_OFERTAS' },
    { label: 'Sem emprego', value: 'SEM_EMPREGO' }
  ]

    constructor(
        private candidateService: CandidateService,
        private errorHandler: ErrorHandlerService,
        private messageService: MessageService,
        private route: ActivatedRoute,
        private router: Router,
        private title: Title
      ){}

      ngOnInit(): void {
        const id = this.route.snapshot.params[`id`];
      if(id !== undefined && id !== 'new'){
        this.loadCandidate(id);
      }
        this.title.setTitle('Atualização de cadastro');
      }


      loadCandidate(id: number) {
        this.candidateService.findById(id)
          .then(candidate => {
            this.candidate = candidate;
          })
          .catch(error => this.errorHandler.handle(error));
      }

      updateCandidate(candidateForm: NgForm) {
        this.candidateService.update(this.candidate)
          .then( candidate => {
            this.messageService.add({ severity: 'success', detail: 'Cadastro atualizado!' });
            this.candidate = candidate;
          })
          .catch(error => this.errorHandler.handle(error));
      }

}
