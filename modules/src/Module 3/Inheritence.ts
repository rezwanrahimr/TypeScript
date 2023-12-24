class Person {
    name: string
    department: string
    address: string

    constructor(name: string, department: string, address: string) {
        this.name = name
        this.department = department
        this.address = address
    }

    makeSleep(hours: number): string | void {
        console.log(`${this.name} will be sleep ${hours}`);
    }
}

// 
class student extends Person {

    constructor(name: string, department: string, address: string) {
        super(name, department, address);
    }

}

const student1 = new student('Rezwan Rahim', 'CSE', 'Dhaka');
const studentOneSleep = student1.makeSleep(8);

//
class Teacher extends Person {
    designation: string

    //
    constructor(name: string, department: string, address: string, designation: string) {
        super(name, department, address);
        this.designation = designation
    }

    takeClass(numberOfClass: number): string | void {
        console.log(`${this.name} take ${numberOfClass} class`);
    }
}

const teacher1 = new Teacher('Rezwan Rahim', 'CSE', 'Feni', 'Jr Developer');
const teacherOneClass = teacher1.takeClass(5);
console.log(`Teacher Details: ${teacher1}\nThis Teacher take ${teacher1.takeClass(5)} number of Class`);
