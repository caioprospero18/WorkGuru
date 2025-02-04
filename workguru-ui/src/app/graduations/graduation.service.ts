import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Graduation } from '../core/models';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GraduationService {

  graduationsUrl = 'http://localhost:8080/graduations';

    constructor(
        private http: HttpClient,
        private auth: AuthService,
      ) { }
    add(graduation: Graduation): Promise<Graduation> {
      const headers = new HttpHeaders()
        .append('Content-Type', 'application/json');

      return this.http.post<any>(this.graduationsUrl, Graduation.toJson(graduation), { headers })
        .toPromise();
    }

    async findById(id: number): Promise<any> {
          const response = await this.http.get<Graduation>(`${this.graduationsUrl}/${id}`)
            .toPromise();
          const graduation = response;
          return graduation;
        }

        async update(graduation: Graduation): Promise<any> {
          const headers = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

          const response = await this.http.put<Graduation>(`${this.graduationsUrl}/${graduation.id}`, Graduation.toJson(graduation), { headers })
            .toPromise();
          const updated = response;
          return updated;
        }


}
