import { Candidate } from './../../core/models';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { CandidateService } from '../candidate.service';
import { Title } from '@angular/platform-browser';

import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.css']
})
export class CandidateRegisterComponent {

  candidate = new Candidate();
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
    private router: Router,
    private title: Title
  ){}

  ngOnInit(): void {
    this.title.setTitle('Cadastro de Candidato');
  }

  save(candidateForm: NgForm) {
    this.candidateService.add(this.candidate)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Candidato cadastrado com sucesso!' });
        this.router.navigate(['/home']);
      })
      .catch(error => this.errorHandler.handle(error));
  }
}

