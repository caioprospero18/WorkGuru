import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../security/auth.service';
import { JobService } from '../job.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { Job } from '../../core/models';

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
    private errorHandler: ErrorHandlerService,
    private title: Title)
  { }

  ngOnInit(): void {
    if (this.auth.isInvalidAccessToken()) {
      this.auth.login();
    }
    this.title.setTitle('Vagas');
    this.list();
  }

  list(): void {
    this.jobService.list()
      .then(result => {
        this.jobs = result;
      })
      .catch(error => this.errorHandler.handle(error));

  }

  listEnterpriseJobs(): void {
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

  showModel(job:Job): string{
    if(job.model == 'HIBRIDO'){
      return 'Híbrido'
    } else if (job.model == 'PRESENCIAL'){
      return 'Presencial'
    } else {
      return 'Home Office'
    }
  }

  showLevel(job:Job): string{
    if(job.level == 'JUNIOR'){
      return 'Júnior'
    } else if (job.level == 'SENIOR'){
      return 'Sênior'
    } else if (job.level == 'PLENO'){
      return 'Pleno'
    } else if (job.level == 'ESTAGIO'){
      return 'Estágio'
    } else {
      return 'Treinee'
    }
  }

}
