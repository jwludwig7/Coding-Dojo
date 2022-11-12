class Card {
    constructor(name='', cost=0) {
        this.name = name;
        this.cost = cost;
    }
    displayCard(){
        let output = '*********\n' + 'name:' + this.name + '\n' + 'cost: ' + this.cost + '\n';
        return output;
    }
}

class Unit extends Card {
    constructor(name='', cost=0, power=0, res=0){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit){
            target.res -= this.power;
        } else {
            throw new Error("Target must be a unit");
        }
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Unit Card Name : ${this.name}, Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.res}`);
    }
}

class Effect extends Card {
    constructor(name='', cost=0, text='', stat='', magnitude=''){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if( target instanceof Unit ) {
            if (this.stat == "resilience")
            {
                target.res += this.magnitude;
            }
            if (this.stat == "power")
            {
                target.power += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }

    showEffects(){
        console.log(`Effect Card Name: ${this.name} , Cost:  , Text: ${this.text} , Stat: ${this.stat} , Magnitude: ${this.magnitude}`);
    }
}
const RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

const BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const HardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);

const Rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);

const PairPro = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

RedBeltNinja.showStats();
HardAlgo.play(RedBeltNinja);
RedBeltNinja.showStats();

Rejection.play(RedBeltNinja);
RedBeltNinja.showStats();

PairPro.play(RedBeltNinja);
RedBeltNinja.showStats();

BlackBeltNinja.showStats();

RedBeltNinja.attack(BlackBeltNinja);
BlackBeltNinja.showStats();