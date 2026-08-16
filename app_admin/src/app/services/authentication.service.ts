import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/api/login', { email, password });
  }

  saveToken(token: string) {
    localStorage.setItem('travlr-token', token);
  }

  getToken(): string {
    return localStorage.getItem('travlr-token') || '';
  }

  getUser() {
    const token = this.getToken();
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  }

  logout() {
    localStorage.removeItem('travlr-token');
  }
}
