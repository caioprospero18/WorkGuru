import moment from 'moment';
import { AuthService } from '../security/auth.service';

export class User {
  id!: number;

}

export class Enterprise {
  id!: number;

}

export class Candidate {
  id!: number;

}

export class Job {
  id!: number;
  title!: string;
  tecnology!: string;
  jobArea!: string;
  description!: string;
  level!: string;
  model!: string;
  salary!: string;
  status!: string;
  publishDate!: Date;
  enterprise = new Enterprise();

  constructor(enterprise_id: number){
    this.enterprise = new User();
    this.enterprise.id = enterprise_id;
  }

  static toJson(job: Job): any {
    return {
      id: job.id,
      title: job.title,
      tecnology: job.tecnology,
      jobArea: job.jobArea,
      description: job.description,
      level: job.level,
      model: job.model,
      salary: job.salary,
      status: job.status,
      publishDate: moment(job.publishDate).format('DD/MM/YYYY'),
      enterprise: job.enterprise
    }
  }
}
