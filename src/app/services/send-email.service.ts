import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  private apiUrl = 'https://portifolio-vercel-one.vercel.app/send-mail';

  constructor(private httpClient: HttpClient) { }

  enviarEmail(name: string, email: string, suggestion: string, timeZoneOffset: number, timeZone: string) {
    const data = { name, email, suggestion };

    const headers = new HttpHeaders({
      'X-Client-Timezone-Offset': timeZoneOffset.toString(),
      'X-Client-Timezone': timeZone
    });
    return this.httpClient.post(this.apiUrl, data, {headers });
  }
}
