import { Enterprise } from './../../core/models';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { EnterpriseService } from '../enterprise.service';
import { Title } from '@angular/platform-browser';

import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-enterprise-register',
  templateUrl: './enterprise-register.component.html',
  styleUrls: ['./enterprise-register.component.css']
})
export class EnterpriseRegisterComponent {

  user = new Enterprise();

  constructor(
    private enterpriseService: EnterpriseService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private router: Router,
    private title: Title
  ){}

  ngOnInit(): void {
    this.title.setTitle('Cadastro de Empresa');
  }

  save(userForm: NgForm) {
    this.enterpriseService.add(this.user)
      .then(() => {
        this.messageService.add({ severity: 'success', detail: 'Empresa cadastrada com sucesso!' });
        this.router.navigate(['/home']);
      })
      .catch(error => this.errorHandler.handle(error));
  }
}

