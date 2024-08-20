// metrics.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  private apiUrl = 'http://localhost:8080/metrics'; 

  constructor(private http: HttpClient) { }

  getMetrics(startDate: string, endDate: string, selectedApplication: string): Observable<any> {
    if (!startDate || !endDate) {
      alert('Please select a start date and an end date.');
      return of(null); // Return an observable with null value
    }
    const url = `${this.apiUrl}?startDate=${startDate}&endDate=${endDate}&applicationName=${selectedApplication}`;
    return this.http.get<any>(url);
  }
}
