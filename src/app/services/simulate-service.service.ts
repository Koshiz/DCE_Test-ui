import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulateServiceService {

  private apiUrl = 'https://localhost:7267/api/Simulation';

  constructor(private http: HttpClient) { }

  runMontyHallGame(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
