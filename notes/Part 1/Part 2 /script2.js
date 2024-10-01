// anything with an initial cap is a class
class Person {}

class Animal {
    constructor(name, type, numOfLegs = 4) {
        (this.name = name), (this.type = type), (this.numOfLegs = numOfLegs);
    }

    // no function keyword is needed to declare a function
    greet(animal){
        console.log(`Hi ${animal.name}`);
    }

    animalType(){
        console.log(`It is a ${this.type}`)
    }

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

    // set name(name){
    //     this._name = name;
    // }
    
    // get name(){
    //     return this._name;
    // }
}

const dog = new Animal('Buster','dog')
dog.greet();
console.log(dog.getName());
dog.setName("someName");

const cat = new Animal('Spot','cat')
cat.greet(); 

dog.greet(cat);