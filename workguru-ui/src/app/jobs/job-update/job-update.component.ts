import { Component } from '@angular/core';
import { Job } from '../../core/models';
import { JobService } from '../job.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrl: './job-update.component.css'
})
export class JobUpdateComponent {

  job!: Job;

  tecnologies = [
    { label: 'Java', value: 'JAVA' },
    { label: 'Python', value: 'PYTHON' },
    { label: 'JavaScript', value: 'JAVASCRIPT' },
    { label: 'HTML5', value: 'HTML5' },
    { label: 'CSS3', value: 'CSS3' },
    { label: 'TypeScript', value: 'TYPESCRIPT' }
  ];

  status = [
    { label: 'Aberta', value: 'ABERTA' },
    { label: 'Em andamento', value: 'EM_ANDAMENTO' },
    { label: 'Fechada', value: 'FECHADA' }
  ];

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

  statuses = [
    { label: 'Aberta', value: 'ABERTA' },
    { label: 'Em andamento', value: 'EM_ANDAMENTO' },
    { label: 'Fechada', value: 'FECHADA' }
  ];

  jobAreas = [
    { label: 'Backend', value: 'BACKEND' },
    { label: 'Frontend', value: 'FRONTEND' },
    { label: 'Fullstack', value: 'FULLSTACK' },
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
        private errorHandler: ErrorHandlerService,
        private messageService: MessageService,
        private route: ActivatedRoute,
        private router: Router,
        private title: Title
      ){}

      ngOnInit(): void {
        const id = this.route.snapshot.params[`id`];
      if(id !== undefined && id !== 'new'){
        this.loadJob(id);
      }
        this.title.setTitle('Atualização da vaga');
      }


      loadJob(id: number) {
        this.jobService.findById(id)
          .then(job => {
            this.job = job;
          })
          .catch(error => this.errorHandler.handle(error));
      }

      updateJob(jobForm: NgForm) {
        this.jobService.update(this.job)
          .then( job => {
            this.messageService.add({ severity: 'success', detail: 'Cadastro atualizado!' });
            this.job = job;
            this.router.navigate(['/jobs/view', job.id]);
          })
          .catch(error => this.errorHandler.handle(error));
      }


}
