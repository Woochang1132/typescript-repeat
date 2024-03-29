{
    type CoffeeCup = {
        shots : number,
        hasMilk? : boolean,
        hasSugar? : boolean
    }
    
    interface CoffeeMaker{
        makeCoffee(shots : number): CoffeeCup;
    }
    
  abstract class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT = 7; // class level
        private coffeeBeans : number = 0; // instance(object)level
    
        //외부에서 new 연산자를 통해 객체 만드는 것을 방지한다.
      public constructor(coffeeBeans : number){
            this.coffeeBeans = coffeeBeans;
        }

        clean() : void{
            console.log("cleaning the machine");
        }

        public fillCoffeeBeans(beans : number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans
        }
        private grindBeans(shots : number){
            console.log(`grinding beans for ${shots}`)
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans! ')
            }
            
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }
        private preheat(): void{
            console.log("커피를 데우고 있습니다.")
        }
        protected abstract extract(shots : number) : CoffeeCup;
    
        makeCoffee(shots : number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CoffeeLatteMachine extends CoffeeMachine{
        constructor(beans: number, public readonly serialNumber : string){
            super(beans);
        }
        private steamMilk() : void {
            console.log('Steaming some milk...');
        }
        protected extract(shots: number): CoffeeCup{
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }        
    }
    class SweetCoffeeMaker extends CoffeeMachine{
        protected extract(shots: number): CoffeeCup{
            return {
                shots,
                hasSugar: true,
            }
        }   
     }

    const latteMachine = new CoffeeLatteMachine(30, "ssss");
    const coffee = latteMachine.makeCoffee(1);
    console.log("latteMachine.serialNumber >>", latteMachine.serialNumber)

        const machines = [
            new CoffeeLatteMachine(16, "ssss"),
            new SweetCoffeeMaker(16),
            new CoffeeLatteMachine(16, "ssss"),
            new SweetCoffeeMaker(16)
        ];
        machines.forEach(machine => {
            console.log("------------------------------------");
            machine.makeCoffee(1);
        })
}