export class Goal{
    goalId: number
    name: string
    description: string
    picture: string
    targetDate: string
    targetAmount: number
    currentAmount: number

    constructor(goalId:number = 0, name:string = '', description:string = '', picture:string = '', targetDate:string = '', targetAmount:number = 0, currentAmount:number = 0){
        this.goalId = goalId
        this.name = name
        this.description = description
        this.picture = picture
        this.targetDate = targetDate
        this.targetAmount = targetAmount
        this.currentAmount = currentAmount
    }
}