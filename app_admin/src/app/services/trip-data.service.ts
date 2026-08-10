import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trips';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private apiUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl);
  }

  addTrip(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  getTrip(code: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${code}`);
  }

  updateTrip(formData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${formData.code}`, formData);
  }
}
