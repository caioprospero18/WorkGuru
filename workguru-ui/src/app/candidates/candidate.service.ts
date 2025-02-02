import { Injectable } from '@angular/core';
import { Candidate } from '../core/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  usersUrl = 'http://localhost:8080/candidates';

    constructor(private http: HttpClient) { }

    add(candidate: Candidate): Promise<Candidate> {
      const headers = new HttpHeaders()
        .append('Content-Type', 'application/json');

      return this.http.post<any>(this.usersUrl, Candidate.toJson(candidate), { headers })
        .toPromise();
    }

    async findById(id: number): Promise<any> {
      const response = await this.http.get<Candidate>(`${this.usersUrl}/${id}`)
        .toPromise();
      const candidate = response;
      this.stringToDate(candidate);
      return candidate;
    }

      private stringToDate(candidate: any): void {
        candidate.birthDate = moment(candidate.birthDate, 'DD/MM/YYYY').toDate();
        }

      async update(candidate: Candidate): Promise<any> {
              const headers = new HttpHeaders()
                .append('Content-Type', 'application/json');

              const response = await this.http.put<Candidate>(`${this.usersUrl}/${candidate.id}`, Candidate.toJson(candidate), { headers })
                .toPromise();
              const updated = response;
              return updated;
            }
}
