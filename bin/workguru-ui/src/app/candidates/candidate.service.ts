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
      console.log('Resposta da API:', candidate);
      return candidate;
    }

    private stringToDate(candidate: any): void {
      if (!candidate.birthDate) {
        candidate.birthDate = null;
        return;
      }

      const parsedDate = moment(candidate.birthDate, ['YYYY-MM-DD', 'DD/MM/YYYY'], true);

      if (parsedDate.isValid()) {
        candidate.birthDate = parsedDate.format('DD/MM/YYYY');
      } else {
        candidate.birthDate = null;
      }
    }

      async update(candidate: Candidate): Promise<any> {
              const headers = new HttpHeaders()
                .append('Content-Type', 'application/json')
                .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

                if (candidate.birthDate) {
                  candidate.birthDate = moment(candidate.birthDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
                }

                if (!candidate.address) {
                  candidate.address = { street: '', number: '', complement:'', city: '', state: '', cep: '' };
                }

              const response = await this.http.put<Candidate>(`${this.usersUrl}/${candidate.id}`, Candidate.toJson(candidate), { headers })
                .toPromise();
              const updated = response;
              return updated;
            }

            async applyJob(jobId: number, candidateId: number) {

              console.log("ID da vaga: ", jobId, " ID do candidato: " , candidateId);
              
              const headers = new HttpHeaders()
                .append('Content-Type', 'application/json');

                return this.http.post<any>(`${this.usersUrl}/apply/${jobId}`, candidateId, { headers })
                .toPromise();

            }
}
