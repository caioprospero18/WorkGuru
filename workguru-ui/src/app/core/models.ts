import moment from 'moment';
import { AuthService } from '../security/auth.service';

export class User {
  id!: number;
  email!: string;
  name!: string;
  password!: string;
  userType!: string;

  static toJson(user: User): any {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
      userType: user.userType
    }
  }
}

export class Enterprise {
  id!: number;
  cnpj!: string;
  phone!: string;
  description!: string;
  jobArea!: string;
  linkSite!: string;
  //tem que adicionar o endereço "address"

  static toJson(enterprise: Enterprise): any {
    return {
      id: enterprise.id,
      cnpj: enterprise.cnpj,
      phone: enterprise.phone,
      description: enterprise.description,
      jobArea: enterprise.jobArea,
      linkSite: enterprise.linkSite
    }
  }
}

export class Candidate {
  id!: number;
  cpf!: string;
  status!: string;
  birthDate!: string;
  gender!: string;
  //tem que adicionar o endereço "address"

  static toJson(candidate: Candidate): any {
    return {
      id: candidate.id,
      cpf: candidate.cpf,
      status: candidate.status,
      birthDate: moment(candidate.birthDate).format('DD/MM/YYYY'),
      gender: candidate.gender
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
