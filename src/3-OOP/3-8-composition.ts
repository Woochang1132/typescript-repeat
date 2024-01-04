
{
    type CoffeeCup = {
        shots : number,
        hasMilk? : boolean,
        hasSugar? : boolean
    }
    
    interface CoffeeMaker{
        makeCoffee(shots : number): CoffeeCup;
    }
    
    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT = 7; // class level
        private coffeeBeans : number = 0; // instance(object)level
    
        //외부에서 new 연산자를 통해 객체 만드는 것을 방지한다.
      public constructor(coffeeBeans : number,
            private milk : MilkFrother,
            private sugar : SugarProvider){
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }

    interface MilkFrother{
        makeMilk(cup : CoffeeCup) : CoffeeCup
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
        private steamMilk() : void {
            console.log('Steaming some milk...');
        }
        makeMilk(cup : CoffeeCup) : CoffeeCup{
            return {
                ...cup,
                hasMilk : true
            }
        }
    }

    class FancyMilkSteamer implements MilkFrother{
        private steamMilk() : void {
            console.log('Fancy Steaming some Fancy milk...');
        }
        makeMilk(cup : CoffeeCup) : CoffeeCup{
            return {
                ...cup,
                hasMilk : true
            }
        }
    }

    class coldMilkSteamer implements MilkFrother{
        private steamMilk() : void {
            console.log('cold Steaming some cold milk...');
        }
        makeMilk(cup : CoffeeCup) : CoffeeCup{
            return {
                ...cup,
                hasMilk : true
            }
        }
    }

    class NoMilk implements MilkFrother{
        makeMilk(cup : CoffeeCup) : CoffeeCup{
            return cup;
        }
    }

    interface SugarProvider{
        addSugar(cup : CoffeeCup) : CoffeeCup
    }

    class CandySugarMixer implements SugarProvider{
        private getSugar() {
            console.log("Getting some sugar from jar.... ");
            return true;
        }
        
        addSugar(cup : CoffeeCup) : CoffeeCup{
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar : sugar
            }
        }

    }

    
    // 설탕 제조기
    class SugarMixer implements SugarProvider{
        private getSugar() {
            console.log("Getting some sugar from jar.... ");
            return true;
        }
        
        addSugar(cup : CoffeeCup) : CoffeeCup{
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar : sugar
            }
        }
    } 

    class NoSugar implements SugarProvider{
        addSugar(cup : CoffeeCup) : CoffeeCup{
            return cup;
        }
    }

        // Milk
        const cheapMilkMaker = new CheapMilkSteamer();
        const fancyMilkMaker = new FancyMilkSteamer();
        const coldMilkMaker = new coldMilkSteamer();
        const noMilk = new NoMilk();
        // Sugar
        const candySugar = new CandySugarMixer();
        const sugar = new SugarMixer();
        const noSugar = new NoSugar();
    
    
        const sweetCandyMachine = new CoffeeMachine(12, noMilk,candySugar);
        const sweetMachine = new CoffeeMachine(12, noMilk ,sugar);
    
        const latteMachine = new CoffeeMachine(12 , cheapMilkMaker, noSugar);
        const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
        const sweetLatteMachine = new CoffeeMachine(
            12,
            cheapMilkMaker,
            candySugar
        )
}