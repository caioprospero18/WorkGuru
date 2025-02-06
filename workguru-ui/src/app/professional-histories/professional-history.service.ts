import { Injectable } from '@angular/core';
import { ProfessionalHistory } from '../core/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import moment from 'moment';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalHistoryService {

  url = 'http://localhost:8080/professional_histories';

    constructor(
        private http: HttpClient,
        private auth: AuthService,
    ) { }

    add(professionalHistory: ProfessionalHistory): Promise<ProfessionalHistory> {
        const headers = new HttpHeaders()
            .append('Content-Type', 'application/json');

        this.stringToDate(professionalHistory);

        return this.http.post<any>(this.url, ProfessionalHistory.toJson(professionalHistory), { headers })
            .toPromise();
    }

    findById(id: number): Promise<any> {
        return this.http.get<ProfessionalHistory>(`${this.url}/${id}`)
            .toPromise()
            .then((response: any) => {
                const professionalHistory = response;

                this.stringToDate(professionalHistory);

                return professionalHistory;
            });
    }

    async update(professionalHistory: ProfessionalHistory): Promise<any> {

        const headers = new HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

        this.stringToDate(professionalHistory);

        const response = await this.http.put<ProfessionalHistory>(`${this.url}/${professionalHistory.id}`, ProfessionalHistory.toJson(professionalHistory), { headers })
            .toPromise();
        const updated = response;
        return updated;
    }

    private stringToDate(graduation: any): void {
      graduation.start = moment(graduation.start).format('DD/MM/YYYY');
      graduation.finish = moment(graduation.finish).format('DD/MM/YYYY');
    }
}
