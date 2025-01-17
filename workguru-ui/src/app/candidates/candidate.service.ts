import { Injectable } from '@angular/core';
import { Candidate } from '../core/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
}
