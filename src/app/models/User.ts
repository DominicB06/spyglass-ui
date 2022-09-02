export class User{
    userId: number
    fname: string
    lname: string
    email: string
    password: string

    constructor(userId = 0, fname = '', lname = '', email = '', password = ''){
        this.userId = userId
        this.fname = fname
        this.lname = lname
        this.email = email
        this.password = password
    }
}