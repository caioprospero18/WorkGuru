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

  async findById(id: number): Promise<any> {
        const response = await this.http.get<Enterprise>(`${this.usersUrl}/${id}`)
          .toPromise();
        const enterprise = response;
        return enterprise;
      }

      async update(enterprise: Enterprise): Promise<any> {
        const headers = new HttpHeaders()
          .append('Content-Type', 'application/json');

        const response = await this.http.put<Enterprise>(`${this.usersUrl}/${enterprise.id}`, Enterprise.toJson(enterprise), { headers })
          .toPromise();
        const updated = response;
        return updated;
      }
}
