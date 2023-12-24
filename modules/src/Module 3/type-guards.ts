// Typescript Type Guards

type twoNumbers = string | number;
// key Guards
const addTwoNumber = (num1: twoNumbers, num2: twoNumbers): twoNumbers | void => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}


// In Guards
type normalUser = {
    name: string
}
type adminUser = {
    name: string,
    role: string
}

const user1 = {
    name: 'rezwan rahim'
}

const user2 = {
    name: 'rezwan rahim',
    role: 'admin'
}

const getUser = (user: normalUser | adminUser) => {
    if ('role' in user) {
        console.log('This is Admin User');
    }
    else {
        console.log("This is Normal User");
    }
}

getUser(user2);


// instanceOf
class Animal {
    name: string
    tone: string

    constructor(name: string, tone: string) {
        this.name = name
        this.tone = tone
    }

    getTone() {
        console.log("here is tone");
    }
}

class Dog extends Animal {
    constructor(name: string, tone: string) {
        super(name, tone);
    }
    dogTone() {
        console.log("gew gew");
    }
}

class Cat extends Animal {
    constructor(name: string, tone: string) {
        super(name, tone);
    }
    catTone() {
        console.log("meow meow");
    }
}

const getAnimal = (animal: Animal) => {

    if (animal instanceof Dog) {
        animal.dogTone();
    }
    else if (animal instanceof Cat) {
        animal.catTone();
    }
    else {
        animal.getTone();
    }
}

const animal1 = new Dog('Dog','gew gew');
const animal2 = new Cat('Cat','mew mew');
getAnimal(animal2);