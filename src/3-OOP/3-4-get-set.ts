class User{
    private interalAge = 4;

    get age():number {
        return this.interalAge;
    }
    set age(num: number){
        if(num < 0){
            console.log('num is less than 0');
        }
        this.interalAge = num;
    }

    get fullName(): string{
        return `${this.firstName} ${this.lastName}`
    }

    static makeUser(firstName: string, lastName:string): User{
        return new User(firstName, lastName);
    }

    constructor(private firstName: string, public lastName: string){}   
}

const user = User.makeUser('choi', 'woochang');
user.age = 6;
console.log("user >>", user.age)
