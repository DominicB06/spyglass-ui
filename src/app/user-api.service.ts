import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  http: HttpClient
  baseUrl: string = environment.USERS_URI

  constructor(http: HttpClient) {
    this.http = http
   }

  findById(userId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/user/${userId}`)
  }

  findByEmail(email: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/user/email/${email}`)
  }

  validateUser(email: string, password:string): Observable<any>{
    return this.http.get(`${this.baseUrl}/validate/${email}/${password}`)
  }

  save(user: User): Observable<any>{
    return this.http.post(this.baseUrl, user)
  }

  update(user: User): Observable<any>{
    return this.http.put(this.baseUrl, user)
  }

  delete(userId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${userId}`)
  }
}
