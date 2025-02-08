import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../security/auth.service';
import { JobFilter, JobService } from '../job.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { Enterprise, Job } from '../../core/models';


@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent implements OnInit{

  level? :string;
  model? :string;
  salary? :string;
  jobArea? :string;
  location? : string;

  jobs = [];

  levels = [
    { label: 'Júnior', value: 'JUNIOR' },
    { label: 'Sênior', value: 'SENIOR' },
    { label: 'Pleno', value: 'PLENO' },
    { label: 'Estágio', value: 'ESTAGIO' },
    { label: 'Treinee', value: 'TREINEE' }
  ];

  models = [
    { label: 'Híbrido', value: 'HIBRIDO' },
    { label: 'Presencial', value: 'PRESENCIAL' },
    { label: 'Home Office', value: 'HOME_OFFICE' }
  ];

  salaries = [
    { label: 'De 0 à R$2.000,00', value: 'DE_0_A_2000' },
    { label: 'De R$2.000,00 à R$5.000,00', value: 'DE_2000_A_5000' },
    { label: 'De R$5.000,00 à R$10.000,00', value: 'DE_5000_A_10000' },
    { label: 'De R$10.000,00 à R$20.000,00', value: 'DE_10000_A_20000' },
    { label: 'Maior que R$20.000,00', value: 'MAIOR_QUE_20000' }
  ];

  jobAreas = [
    { label: 'Backend', value: 'BACKEND'},
    { label: 'Frontend', value: 'FRONTEND'},
    { label: 'Fullstack', value: 'FULLSTACK'},
    { label: 'Suporte Técnico', value: 'SUPORTE_TECNICO'}
  ];

  locations = [
    { label: 'AC', value: 'AC' },
    { label: 'AL', value: 'AL' },
    { label: 'AP', value: 'AP' },
    { label: 'AM', value: 'AM'},
    { label: 'BA', value: 'BA' },
    { label: 'CE', value: 'CE' },
    { label: 'DF', value: 'DF' },
    { label: 'ES', value: 'ES'},
    { label: 'GO', value: 'GO' },
    { label: 'MA', value: 'MA' },
    { label: 'MT', value: 'MT' },
    { label: 'MS', value: 'MS'},
    { label: 'MG', value: 'MG' },
    { label: 'PA', value: 'PA' },
    { label: 'PB', value: 'PB' },
    { label: 'PR', value: 'PR'},
    { label: 'PE', value: 'PE' },
    { label: 'PI', value: 'PI' },
    { label: 'RJ', value: 'RJ' },
    { label: 'RN', value: 'RN'},
    { label: 'RS', value: 'RS' },
    { label: 'RO', value: 'RO' },
    { label: 'RR', value: 'RR' },
    { label: 'SC', value: 'SC'},
    { label: 'SP', value: 'SP' },
    { label: 'SE', value: 'SE' },
    { label: 'TO', value: 'TO' }
  ];

  constructor(
    private jobService: JobService,
    private auth: AuthService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private title: Title)
  { }

  ngOnInit(): void {
    this.title.setTitle('Vagas');
    this.search();
  }

  /*
  list(): void {
    this.jobService.list()
      .then(result => {
        this.jobs = result;
      })
      .catch(error => this.errorHandler.handle(error));

  }*/

      search(): void {
        const filter: JobFilter = {
          level: this.level,
          model: this.model,
          salary: this.salary,
          jobArea: this.jobArea,
          location: this.location
        }

        this.jobService.search(filter)
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
        this.search();
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
