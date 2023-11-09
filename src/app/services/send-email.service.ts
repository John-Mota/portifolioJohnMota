import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  private apiUrl = 'http://localhost:3000/send-mail';

  constructor(private httpClient: HttpClient) { }

  enviarEmail(name: string, email: string, suggestion: string) {
    const data = { name, email, suggestion };
    return this.httpClient.post(this.apiUrl, data);
  }
}
