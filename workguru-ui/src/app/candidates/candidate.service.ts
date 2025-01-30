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

    findById(id: number): Promise<any> {
      if (isNaN(id) || id <= 0) {
        console.error("ID inválido passado para findById:", id);
        return Promise.reject("ID inválido fornecido para findById");
      }

      const token = localStorage.getItem('access_token');
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      console.log(`Fazendo requisição para: ${this.usersUrl}/${id}`);

      return this.http.get<Candidate>(`${this.usersUrl}/${id}`, { headers })
        .toPromise()
        .then(response => {
          console.log("Resposta da API:", response);
          return response;
        })
        .catch(error => {
          console.error("Erro na requisição:", error);
          throw error;
        });
    }

      private stringToDate(candidate: any): void {
        candidate.birthDate = moment(candidate.birthDate, 'DD/MM/YYYY').toDate();
        }
}
