// polymorphism
class Person {
    getSleep(): string {
        return "I am sleeping 8 hours per day";
    }
}

class Student extends Person {
    getSleep(): string {
        return "I am sleeping 7 hours per day";
    }
}

class Developer extends Person {
    getSleep(): string {
        return "I am sleeping 6 hours per day";
    }
}

const getSleepingHours = (param: Person) => {
    const sleepHours = param.getSleep();
    console.log(sleepHours);

}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);