import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { Job } from '../core/models';
import moment from 'moment';
import { DatePipe } from '@angular/common';

export interface JobFilter {
  model?: string,
  level?: string,
  salary?: string;
  jobArea?: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobsUrl = 'http://localhost:8080/jobs';
  email: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private datePipe: DatePipe
  ) { }

  /*
  async list(): Promise<any> {
    const response = await this.http.get(`${this.jobsUrl}`)
      .toPromise();
    return response;
  }*/

    search(filter: JobFilter): Promise<any> {
      const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      let params = new HttpParams();

      if(filter.jobArea){
        params = params.set('jobArea', filter.jobArea);
      }

      if(filter.level){
        params = params.set('level', filter.level);
      }

      if (filter.model) {
        params = params.set('model', filter.model);
      }

      if (filter.salary) {
        params = params.set('salary', filter.salary);
      }


      return this.http.get(`${this.jobsUrl}?resumo`, { headers, params })
      .toPromise()
      .then(response => {
        return response;
      });
    }


  listByEnterprise(): Promise<any> {
    this.email = this.auth.jwtPayload?.sub;
    return this.http.get(`${this.jobsUrl}/job/${this.email}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  add(job: Job): Promise<Job> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.jobsUrl, Job.toJson(job), { headers })
      .toPromise();
  }

  remove(id: number): Promise<any> {
    return this.http.delete(`${this.jobsUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  update(job: Job): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<Job>(`${this.jobsUrl}/${job.id}`, Job.toJson(job), { headers })
      .toPromise()
      .then((response: any) => {
        const updated = response;

        this.stringToDate(updated);

        return updated;
      });
  }


  findById(id: number): Promise<any> {
    return this.http.get<Job>(`${this.jobsUrl}/${id}`)
      .toPromise()
      .then((response: any) => {
        const job = response;

        this.stringToDate(job);

        return job;
      });
  }

  private stringToDate(job: any): void {
    job.date = moment(job.date, 'DD/MM/YYYY').toDate();
  }


}

