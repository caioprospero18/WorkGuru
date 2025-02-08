import { Component, OnInit } from '@angular/core';
import { Enterprise } from '../../core/models';
import { EnterpriseService } from '../enterprise.service';
import { AuthService } from '../../security/auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-enterprise-view-profile',
  templateUrl: './enterprise-view-profile.component.html',
  styleUrl: './enterprise-view-profile.component.css'
})
export class EnterpriseViewProfileComponent implements OnInit{

  enterprise!: Enterprise
    constructor(
        private enterpriseService: EnterpriseService,
        private auth: AuthService,
        private errorHandler: ErrorHandlerService,
        private messageService: MessageService,
        private route: ActivatedRoute,
        private title: Title)
      { }

  ngOnInit(): void {
    const enterpriseId= this.route.snapshot.params[`id`];
    this.loadEnterprise(enterpriseId);

  }

  loadEnterprise(id: number) {
    this.enterpriseService.findById(id)
      .then(enterprise => {
        this.enterprise = enterprise;
      })
      .catch(error => this.errorHandler.handle(error));
  }

}
