/* Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties. */


class Person {
    private name: string
    private age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public get getDetails() {
        return `Name: ${this.name}\nAge: ${this.age}`;
    }
}

const person1 = new Person('Rezwan Rahim', 23);
console.log(person1.getDetails);

class Student extends Person {
    private grade: number
    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    public getGrade() {
        return `student's grade: ${this.grade}`;
    }
}

const student1 = new Student('Rezwan Rahim Rupak', 23, 3.5);
// console.log(student1.getGrade());