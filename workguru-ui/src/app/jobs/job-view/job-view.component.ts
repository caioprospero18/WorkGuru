import { Candidate, Job } from './../../core/models';
import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from '../../security/auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../../candidates/candidate.service';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrl: './job-view.component.css'
})
export class JobViewComponent implements OnInit{
  applied: boolean = false
  job!: Job
  candidate!: Candidate
  constructor(
      private jobService: JobService,
      private candidateService: CandidateService,
      public auth: AuthService,
      private errorHandler: ErrorHandlerService,
      private messageService: MessageService,
      private route: ActivatedRoute,
      private title: Title)
    { }

    ngOnInit(): void {
      const jobId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadJob(jobId);
    }

    loadCandidate(id: number){
      this.candidateService.findById(id)
        .then(candidate => {
          this.candidate = candidate;
        })
        .catch(error => this.errorHandler.handle(error));
    }

    loadJob(id: number) {
      this.jobService.findById(id)
        .then(job => {
          this.job = job;
          this.isApplied();
        })
        .catch(error => this.errorHandler.handle(error));
    }

    isApplied(){
      if(this.auth.jwtPayload?.user_type === 'P'){
        this.jobService.isApplied(this.job.id, this.auth.jwtPayload?.user_id).subscribe(
          (isCandidatado) => {
            this.applied = isCandidatado;
          },
          (error) => {
            console.error('Erro ao verificar candidatura', error);
          }
        );

      }
      return false;
    }

    confirmApply(){
      const confirm = window.confirm("Você tem certeza que deseja se candidatar a esta vaga?");
      if (confirm) {
        this.applyJob();
        window.location.reload();
      } else {
      console.log('Candidatura cancelada');
    }
    }

    applyJob(){
      this.candidateService.applyJob(this.job.id, this.auth.jwtPayload?.user_id);
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

    showSalary(job:Job): string{
      if(job.salary == 'DE_0_A_2000'){
        return 'De 0 à R$2.000,00'
      } else if (job.salary == 'DE_2000_A_5000'){
        return 'De R$2.000,00 à R$5.000,00'
      } else if (job.salary == 'DE_5000_A_10000'){
        return 'De R$5.000,00 à R$10.000,00'
      } else if (job.salary == 'DE_10000_A_20000'){
        return 'De R$10.000,00 à R$20.000,00'
      } else {
        return 'Maior que R$20.000,00'
      }
    }

    showJobArea(job:Job): string{
      if(job.jobArea == 'BACKEND'){
        return 'Backend'
      } else if (job.jobArea == 'FRONTEND'){
        return 'Frontend'
      } else if (job.jobArea == 'FULLSTACK'){
        return 'Fullstack'
      } else {
        return 'Suporte Técnico'
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

    showStatus(job:Job): string{
      if(job.status == 'ABERTA'){
        return 'Aberta'
      } else if (job.status == 'EM_ANDAMENTO'){
        return 'Em andamanto'
      } else {
        return 'Fechada'
      }
    }

}

