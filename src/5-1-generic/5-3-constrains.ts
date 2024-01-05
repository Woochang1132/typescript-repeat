interface Employee{
    pay() : void;
}

class FullTimeEmployee implements Employee{
    pay(){
        console.log(`full time!!`);
    }
    workFullTIme(){

    }
}

class PartTimeEmployee implements Employee{
    pay(): void {
        console.log(`part time!!`)
    }
    workPartTime(){}
}


function pay<T extends Employee>(employee : T): T{
    employee.pay();
    return employee
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTIme();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
ellieAfterPay.workFullTIme();

const obj = {
    name : 'woochang',
    age : 20
}

const obj2 ={
    animal : '🐆'
};

function getValue<T,K extends keyof T>(obj : T, key: K ) : T[K] {
        return obj[key]
    
}

console.log(getValue(obj, 'name'))

