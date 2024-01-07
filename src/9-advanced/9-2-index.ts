{
    const obj = {
        name: 'woochang'
    };
    obj.name;
    obj['name']

    type Animal = {
        name : string;
        age : number ;
        gender : 'male' | 'female'
    }

    type Name = Animal['name'] // string 타입이다.
    const text : Name  = "woochang"

    type Gender = Animal['gender']; // 'male' | 'female'

    type Keys = keyof Animal; // 'name' | 'age' | 'gender'  키 자체의 string 값을 활용하게 된다.
    const key : Keys = 'age';

    type Person = {
        name : string,
        gender : Animal['gender']
    }
    const person : Person = {
        name : 'woochang',
        gender : 'male'
    }
}