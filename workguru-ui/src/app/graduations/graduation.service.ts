import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Graduation } from '../core/models';
import { AuthService } from '../security/auth.service';
import moment from 'moment';

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
    console.log('Dados enviados para o backend:', graduation);
      const headers = new HttpHeaders()
          .append('Content-Type', 'application/json');

      this.stringToDate(graduation);

      return this.http.post<any>(this.graduationsUrl, Graduation.toJson(graduation), { headers })
          .toPromise();
  }

  findById(id: number): Promise<any> {
      return this.http.get<Graduation>(`${this.graduationsUrl}/${id}`)
          .toPromise()
          .then((response: any) => {
              const graduation = response;

              this.stringToDate(graduation);

              return graduation;
          });
  }

  async update(graduation: Graduation): Promise<any> {

      const headers = new HttpHeaders()
          .append('Content-Type', 'application/json')
          .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

      this.stringToDate(graduation);

      const response = await this.http.put<Graduation>(`${this.graduationsUrl}/${graduation.id}`, Graduation.toJson(graduation), { headers })
          .toPromise();
      const updated = response;
      return updated;
  }

  private stringToDate(graduation: any): void {
    graduation.start = moment(graduation.start).format('DD/MM/YYYY');
    graduation.finish = moment(graduation.finish).format('DD/MM/YYYY');
  }
}
