import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:7000/api/user';
  constructor(private http: HttpClient) {}
  register(username: string, password: string): Observable<string> {
    return this.http.post(this.apiUrl + '/register', { username, password }, { responseType: 'text' });
  }
  login(username: string, password: string): Observable<string> {
    return this.http.post(this.apiUrl + '/login', { username, password }, { responseType: 'text' });
  }
}
