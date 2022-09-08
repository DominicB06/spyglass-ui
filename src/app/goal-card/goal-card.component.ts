import { Component, OnInit } from '@angular/core';
import { GoalApiService } from '../goal-api.service';
import { Goal } from '../models/Goal';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { UserApiService } from '../user-api.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.css']
})
export class GoalCardComponent implements OnInit {

  goalService: GoalApiService
  user: number = 0
  goals!: Goal[]
  create: boolean = false
  update: boolean = false
  deposit: boolean = false
  sidebar: boolean = false
  
  tempGoal: Goal
  currentGoal: Goal= new Goal()
  depositAmount: number = 0

  today: Date = new Date()
  tmrw : Date = new Date(this.today.getDate() + 1)
  
  constructor(goalService: GoalApiService, private confirmationService: ConfirmationService, private messageService: MessageService, private route: ActivatedRoute, private userService: UserApiService, 
    private router: Router) {
    this.goalService = goalService
    this.tempGoal = new Goal()
   }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.user = params['user']

      let currentUser = sessionStorage.getItem('currentUser')
      
      if(currentUser != this.user.toString()){
        this.router.navigate(['/', 'home']);
      }else{
        this.goalService.findByUser(params['user']).subscribe(resp =>{
          this.goals = resp
        })
      }
      
    })
  }

  saveGoal(){
    this.tempGoal.user.userId = this.user

    this.goalService.save(this.tempGoal).subscribe({
      error: (e) => this.messageService.add({severity:'error', summary:'Error', detail:'Error occured creating this goal'}),
      complete: () => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Goal created successfully!'})
        this.ngOnInit()
      }
    })

    this.tempGoal = new Goal()
  }

  updateGoal(){
    console.log(this.currentGoal)

    this.goalService.update(this.currentGoal).subscribe({
      error: (e) => this.messageService.add({severity:'error', summary:'Error', detail:'Error occured updating this goal'}),
      complete: () => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Goal updated successfully!'})
        this.ngOnInit()
      }
    })

    this.currentGoal = new Goal()
  }

  deleteGoal(goalId: number){
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this goal?',
      accept: () => {
        this.goalService.delete(goalId).subscribe({
              error: (e) => this.messageService.add({severity:'error', summary:'Error', detail:'Error occured deleting this goal'}),
              complete: () => {
                this.messageService.add({severity:'success', summary:'Success', detail:'Goal deleted successfully!'})
                this.ngOnInit()
              }
            })
      }
    })
  }

  urlIsValid(url: string){
    return /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/.test(url);
  }

  toggleCreate(){
    this.create = !this.create
  }

  toggleUpdate(goal: Goal){
    this.currentGoal = goal
    this.update = !this.update
  }

  toggleDeposit(goal: Goal){
    this.currentGoal = goal
    this.deposit = !this.deposit
  }

  updateDepositAmount(){
    this.currentGoal.currentAmount = this.currentGoal.currentAmount + this.depositAmount
    this.updateGoal()
    this.deposit = !this.deposit
  }

  getProgress(current: number, goal: number): number{
    return Math.round(((current/goal)*100))
  }

  formatUsd(dollar: number):string{
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(dollar)
  }

}
