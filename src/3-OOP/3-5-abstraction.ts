
{
    type CoffeeCup = {
        shots : number;
        hasMilk : boolean
    }
    
    interface CoffeeMaker{
        makeCoffee(shots : number): CoffeeCup;
    }

    interface CommercialCoffeeMaker{
        makeCoffee(shots : number): CoffeeCup;
        fillCoffeeBeans(beans : number) : void;
        clean() : void
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{
        private static BEANS_GRAM_PER_SHOT = 7; // class level
        private coffeeBeans : number = 0; // instance(object)level
    
        //외부에서 new 연산자를 통해 객체 만드는 것을 방지한다.
      private constructor(coffeeBeans : number){
            this.coffeeBeans = coffeeBeans;
        }
    
        static makeMachine(coffeeBeans: number) : CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
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
        private extract(shots : number) : CoffeeCup{
            console.log(`${shots}샷 만큼의 커피를 내리고 있습니다.`);

            return {
                shots : shots,
                hasMilk : false
            }
        }
    
        makeCoffee(shots : number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    
        
        class AmateurUser{
            constructor(private machine : CoffeeMaker){}
            makeCoffee(){
                const coffee = this.machine.makeCoffee(2);
                console.log("AmateurUser >>", coffee);
            }
            clean() : void{
                console.log("cleaning the roomd")
            }
        }

        class ProBarista{
            constructor(private machine : CommercialCoffeeMaker){}
            makeCoffee(){
                const coffee = this.machine.makeCoffee(1);
                console.log("ProBarista >>", coffee);
                this.machine.fillCoffeeBeans(30);
                this.machine.clean();

            }
        }


        const maker : CoffeeMachine = CoffeeMachine.makeMachine(30);
        const amateur = new AmateurUser(maker);
        const pro = new ProBarista(maker);

        amateur.makeCoffee();
        pro.makeCoffee();
    }