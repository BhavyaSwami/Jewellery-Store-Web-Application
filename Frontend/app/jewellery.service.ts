import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JewelleryService {
  private apiUrl = 'http://localhost:7000/api/jewellery';
  constructor(private http: HttpClient) {}
  getJewellery(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  orderJewellery(id: number): Observable<string> {
    return this.http.post(this.apiUrl + '/order/' + id, {}, { responseType: 'text' });
  }
}
