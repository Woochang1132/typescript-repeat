{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    // public
    // private
    // protected

    class CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT = 7;
        private coffeeBeans: number = 0;

        //외부에서 new 연산자를 통해서 객체를 만드는 것을 방지
        private constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }
        fillCoffeeBeans(beans: number){
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans
        }

        makeCoffee(shots: number): CoffeeCup{
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false
            }
        }
    }
    const maker = CoffeeMaker.makeMachine(30);
    maker.fillCoffeeBeans(30);
    //maker.coffeeBeans = 3;// 외부에서 내부 상태를 변경하는 경우를 방지하게 된다.
    console.log("maker >>", maker)
    
}