import { Component } from '@angular/core';
import { Job } from '../../core/models';
import { NgForm } from '@angular/forms';
import { JobService } from '../job.service';
import { AuthService } from '../../security/auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-job-register',
  templateUrl: './job-register.component.html',
  styleUrl: './job-register.component.css'
})
export class JobRegisterComponent {
  tecnologies = [
    { label: 'Java', value: 'JAVA' },
    { label: 'Python', value: 'PYTHON' },
    { label: 'JavaScript', value: 'JAVASCRIPT' },
    { label: 'HTML5', value: 'HTML5' },
    { label: 'CSS3', value: 'CSS3' },
    { label: 'TypeScript', value: 'TYPESCRIPT' }
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
    { label: 'De R$2.000,00 à R$5.000,00', value: 'SENDE_2000_A_5000' },
    { label: 'De R$5.000,00 à R$10.000,00', value: 'DE_5000_A_10000' },
    { label: 'De R$10.000,00 à R$20.000,00', value: 'DE_10000_A_20000' },
    { label: 'Maior que R$20.000,00', value: 'MAIOR_QUE_20000' }
  ];

  status = [
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

  job = new Job(this.auth.jwtPayload?.enterprise_id);

  constructor(
    private jobService: JobService,
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title){}

    ngOnInit(): void {
      const id = this.route.snapshot.params[`id`];
      if(id !== undefined){
        this.loadJob(id);
      }
      this.title.setTitle('Cadastro de Vagas');
    }

    get editing(): boolean {
      return Boolean(this.job.id);
    }

    loadJob(id: number) {
      this.jobService.findById(id)
        .then(job => {
          this.job = job;
        })
        .catch(error => this.errorHandler.handle(error));
    }

    save(jobForm: NgForm){
      if(this.editing){
        this.updateJob(jobForm);
      }else{
        this.addJob(jobForm);
      }
    }

    updateJob(jobForm: NgForm) {
      this.jobService.update(this.job)
        .then( job => {
          this.messageService.add({ severity: 'success', detail: 'Vaga editada com sucesso!' });
          this.job = job;
        })
        .catch(error => this.errorHandler.handle(error));
    }

    addJob(jobForm: NgForm) {
      this.jobService.add(this.job)
        .then(addedJob => {
          this.messageService.add({ severity: 'success', detail: 'Vaga adicionada com sucesso!' });
    this.loadJob(addedJob.id);
          this.router.navigate(['/jobs', addedJob.id]);
        })
        .catch(error => this.errorHandler.handle(error));
    }

    new(jobForm: NgForm){
      this.job = new Job(this.auth.jwtPayload?.user_id);
      jobForm.reset();
      this.router.navigate(['/jobs/new']);
    }
  }



