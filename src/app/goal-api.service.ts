import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Goal } from './models/Goal';

@Injectable({
  providedIn: 'root'
})
export class GoalApiService {

  http: HttpClient

  baseUrl: string = environment.GOALS_URI
  
  constructor(http: HttpClient) {
    this.http = http
   }

   findByUser(userId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/user/${userId}`);
   }

   save(goal: Goal): Observable<any>{
    return this.http.post(this.baseUrl, goal)
   }

   update(goal: Goal): Observable<any>{
    return this.http.put(this.baseUrl, goal)
   }

   delete(goalId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${goalId}`)
   }
}
