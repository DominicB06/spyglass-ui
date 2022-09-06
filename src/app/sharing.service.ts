import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private data = new BehaviorSubject(new User())
  currentData = this.data.asObservable()

  //user:number = 0

  constructor() { }

  setData(data: User){
    this.data.next(data)
    //this.user = data
  }
}
