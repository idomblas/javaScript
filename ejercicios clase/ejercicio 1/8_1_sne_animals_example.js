// En este modulo vamos a hacer unas clases jerárquicas de animales.
// Primero tendremos la clase animales, que tendrá varios atributos, depsués la clase mamíferos y por
// último la clase Perros.

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get_name() {
        return this.name;
    }

    get_age() {
        return this.age;
    }

    breath() {
        return "I'm breathing";
    }

    nourish() {
        return "I'm nourishing";
    }
}

class Mammal extends Animal {
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }

    get_sex() {
        return this.sex;
    }

    nourish() {
        if (this.sex == "male") {
            return "I can not nourish!";
        }
        else {
            return "I'm nourishing with my tits";
        }
    }
}

class Dog extends Mammal {
    constructor(name, age, sex, breed) {
        super(name, age, sex);
        this.breed = breed;
    }

    get_breed() {
        return this.breed;
    }

    run_with_four_legs() {
        console.log("I'm running with my four legs");
    }
}


let animal = new Animal("animal", 1);
let mammal = new Mammal("mammal", 2, "male");
let toby = new Dog("Toby", 3, "male", "labrador");
let mia = new Dog("Mia", 2, "female", "poodle");

console.log("Name:")
console.log(animal.get_name());
console.log(mammal.get_name());
console.log(toby.get_name());
console.log(mia.get_name());

console.log("Age:")
console.log(animal.get_name(), animal.get_age());
console.log(mammal.get_name(), mammal.get_age());
console.log(toby.get_name(), toby.get_age());
console.log(mia.get_name(), mia.get_age());

console.log("Breath:")
console.log(animal.get_name(), animal.breath());
console.log(mammal.get_name(), mammal.breath());
console.log(toby.get_name(), toby.breath());
console.log(mia.get_name(), mia.breath());

console.log("Nourish:")
console.log(animal.get_name(), animal.nourish());
console.log(mammal.get_name(), mammal.nourish());
console.log(toby.get_name(), toby.nourish());
console.log(mia.get_name(), mia.nourish());