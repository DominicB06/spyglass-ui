export class User{
    userId: number
    fname: string
    lname: string
    email: string
    password: string

    constructor(userId:number = 0, fname:string = '', lname:string = '', email:string = '', password:string = ''){
        this.userId = userId
        this.fname = fname
        this.lname = lname
        this.email = email
        this.password = password
    }
}