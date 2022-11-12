class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
        return this.name;
    }
    showStats(){
        console.log(`${this.name} 's strengh is ${this.strength} with speed of ${this.speed} and has ${this.health} health`);
        
        return (`${this.name} 's strengh is ${this.strength} with speed of ${this.speed} and has ${this.health} health`);
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

