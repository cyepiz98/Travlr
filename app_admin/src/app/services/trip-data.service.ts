import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trips';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  private getAuthHeaders() {
    const token = this.authService.getToken();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  addTrip(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData, {
      headers: this.getAuthHeaders()
    });
  }

  deleteTrip(code: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${code}`, {
    headers: this.getAuthHeaders()
  });
}


  getTrip(code: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${code}`);
  }

  updateTrip(formData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${formData.code}`, formData, {
      headers: this.getAuthHeaders()
    });
  }
}
