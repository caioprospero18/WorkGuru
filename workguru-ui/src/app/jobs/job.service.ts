import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { Job } from '../core/models';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobsUrl = 'http://localhost:8080/jobs';
  email: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  async list(): Promise<any> {
    const response = await this.http.get(`${this.jobsUrl}`)
      .toPromise();
    return response;
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

  async remove(id: number): Promise<any> {
    await this.http.delete(`${this.jobsUrl}/${id}`)
      .toPromise();
    return null;
  }

  async update(job: Job): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    const response = await this.http.put<Job>(`${this.jobsUrl}/${job.id}`, Job.toJson(job), { headers })
      .toPromise();
    const updated = response;
    this.stringToDate(updated);
    return updated;
  }

  async findById(id: number): Promise<any> {
    const response = await this.http.get<Job>(`${this.jobsUrl}/${id}`)
      .toPromise();
    const job = response;
    this.stringToDate(job);
    return job;
  }

  private stringToDate(job: any): void {
    job.date = moment(job.date, 'DD/MM/YYYY').toDate();
  }

}

