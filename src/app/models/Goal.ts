import { User } from "./User"

export class Goal{
    goalId: number
    name: string
    description: string
    picture: string
    targetDate: Date
    targetAmount: number
    currentAmount: number
    user: User

    constructor(goalId = 0, name = '', description = '', picture = '', targetDate = new Date(), targetAmount = 0, currentAmount = 0, user = new User()){
        this.goalId = goalId
        this.name = name
        this.description = description
        this.picture = picture
        this.targetDate = targetDate
        this.targetAmount = targetAmount
        this.currentAmount = currentAmount
        this.user = user
    }
}