import { Component } from '@angular/core';
import { EnterpriseService } from '../enterprise.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Enterprise } from '../../core/models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-enterprise-update-profile',
  templateUrl: './enterprise-update-profile.component.html',
  styleUrl: './enterprise-update-profile.component.css'
})
export class EnterpriseUpdateProfileComponent {

  enterprise!: Enterprise;

  constructor(
      private enterpriseService: EnterpriseService,
      private errorHandler: ErrorHandlerService,
      private messageService: MessageService,
      private route: ActivatedRoute,
      private router: Router,
      private title: Title
    ){}

    ngOnInit(): void {
      const id = this.route.snapshot.params[`id`];
    if(id !== undefined && id !== 'new'){
      this.loadEnterprise(id);
    }
      this.title.setTitle('Atualização de cadastro');
    }


    loadEnterprise(id: number) {
      this.enterpriseService.findById(id)
        .then(enterprise => {
          this.enterprise = enterprise;
        })
        .catch(error => this.errorHandler.handle(error));
    }

    updateEnterprise(enterpriseForm: NgForm) {
      this.enterpriseService.update(this.enterprise)
        .then( enterprise => {
          this.messageService.add({ severity: 'success', detail: 'Cadastro atualizado!' });
          this.enterprise = enterprise;
        })
        .catch(error => this.errorHandler.handle(error));
    }

}
