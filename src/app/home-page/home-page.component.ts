import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../models/User';
import { UserApiService } from '../user-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  email!: string
  password!: string
  password2!: string

  showLogin: boolean = false
  showCreate: boolean = false

  url!: string

  newUser: User = new User()
  currentUser: User = new User()

  constructor(private scroller: ViewportScroller, private router: Router, private messageService: MessageService, private userService: UserApiService) { }

  ngOnInit(): void {
  }

  toggleLogin(){
    // make sure create is off, dont want both enable at the same time
    this.showCreate = false
    this.showLogin = !this.showLogin
  }

  toggleCreate(){
    // make sure login is off, dont want both enable at the same time
    this.showLogin = false
    this.showCreate = !this.showCreate
  }

  login(){
    this.userService.validateUser(this.email, this.password).subscribe(resp =>{ 
      this.currentUser = resp
      console.log(resp)
      if(this.currentUser != null){
        this.router.navigate(['/goals'], {queryParams: {user: this.currentUser.userId}})
      }else{
        this.messageService.add({severity:'error', summary:'Error', detail:'Incorrect Email or Password'})
      }
      
    })
  }

  saveUser(){

    if(this.password === this.password2){
      this.newUser.password = this.password

      this.userService.save(this.newUser).subscribe({
        next: (v) => this.newUser = v,
        error: (e) => this.messageService.add({severity:'error', summary:'Error', detail:'Error Creating Account'}),
        complete: () => {
          this.messageService.add({severity:'success', summary:'Success', detail:'Account Successfully Created!'})
          this.router.navigate(['/goals'], {queryParams: {user: this.newUser.userId}})
        }
      })
    }else{
      this.messageService.add({severity:'error', summary:'Error', detail:'Passwords do not Match'})
    }
  }
}
