import { Component, OnInit } from '@angular/core';
import { GoalApiService } from '../goal-api.service';
import { Goal } from '../models/Goal';

@Component({
  selector: 'app-goal-card',
  templateUrl: './goal-card.component.html',
  styleUrls: ['./goal-card.component.css']
})
export class GoalCardComponent implements OnInit {

  goalService: GoalApiService
  userId: number = 1
  // goals: Array<Goal> = [
  //   {goalId:0,name:"trip", description:"dsa",targetDate:"2022-02-02",targetAmount:2000,currentAmount:0, picture:"dsa", user:{userId:1, fname:"fommi", lname:"dsa", email:"dsadsa", password:"dsaas"}}]
  goals!: Goal[]
  
  constructor(goalService: GoalApiService) {
    this.goalService = goalService
   }

  ngOnInit(): void {
    this.goalService.findByUser(this.userId).subscribe(resp =>{
      console.log(resp)
      this.goals = resp
    })
    console.log(this.goals)
  }

}
