import moment from 'moment';
import { AuthService } from '../security/auth.service';


export class Enterprise {
  id!: number;
  email!: string;
  name!: string;
  password!: string;
  userType!: string;
  cnpj!: string;
  phone!: string;
  description!: string;
  jobArea!: string;
  linkSite!: string;
  //tem que adicionar o endereço "address"

  static toJson(enterprise: Enterprise): any {
    return {
      id: enterprise.id,
      email: enterprise.email,
      name: enterprise.name,
      password: enterprise.password,
      userType: enterprise.userType,
      cnpj: enterprise.cnpj,
      phone: enterprise.phone,
      description: enterprise.description,
      jobArea: enterprise.jobArea,
      linkSite: enterprise.linkSite
    }
  }
}

export class Candidate{
  id!: number;
  email!: string;
  name!: string;
  password!: string;
  userType!: string;
  cpf!: string;
  status!: string;
  date!: string;
  gender!: string;
  phone!: string;
  //tem que adicionar o endereço "address"

  static toJson(candidate: Candidate): any {
    return {
      id: candidate.id,
      email: candidate.email,
      name: candidate.name,
      password: candidate.password,
      userType: candidate.userType,
      cpf: candidate.cpf,
      status: candidate.status,
      date: moment(candidate.date).format('DD/MM/YYYY'),
      gender: candidate.gender,
      phone: candidate.phone
    }
  }

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
    this.enterprise = new Enterprise();
    this.enterprise.id = enterprise_id;
    this.status = 'ABERTA';
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
