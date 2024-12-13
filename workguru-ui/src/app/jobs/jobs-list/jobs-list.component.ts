import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../security/auth.service';
import { JobService } from '../job.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent implements OnInit{

  jobs = [];

  constructor(
    private jobService: JobService,
    private auth: AuthService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService)
  { }

  ngOnInit(): void {
    if (this.auth.isInvalidAccessToken()) {
      this.auth.login();
    }
    this.list();
  }

  list(): void {
    this.jobService.listByEnterprise()
      .then(result => {
        this.jobs = result;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  confirmRemoval(job: any): void {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.remove(job);
      }
    });
  }

  remove(job: any): void {
    this.jobService.remove(job.id)
      .then(() => {
        this.list();
        this.messageService.add({ severity: 'success', detail: 'Atividade excluída com sucesso!' });
      })
      .catch(error => this.errorHandler.handle(error));
  }

}
