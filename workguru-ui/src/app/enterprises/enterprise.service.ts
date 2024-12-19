import { Enterprise } from './../core/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  usersUrl = 'http://localhost:8080/enterprises';

  constructor(private http: HttpClient) { }

  add(enterprise: Enterprise): Promise<Enterprise> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.usersUrl, Enterprise.toJson(enterprise), { headers })
      .toPromise();
  }
}
