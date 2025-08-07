{

    class Person {
        name: string;
        age: number;
        gender: string;
        presentAddress?: string;
        permanentAddress?: string;

        constructor(name: string, age: number, gender: string, presentAddress?: string, permanentAddress?: string) {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.presentAddress = presentAddress;
            this.permanentAddress = permanentAddress;
        }

        address() {
            return {
                presentAddress: this.presentAddress,
                permanentAddress: this.permanentAddress
            };
        }
    }


    // oop - inheritance
    class Student extends Person {
        rollNo: number;

        constructor(name: string, age: number, gender: string, rollNo: number, presentAddress?: string, permanentAddress?: string) {
            super(name, age, gender, presentAddress, permanentAddress);
            this.rollNo = rollNo;
        }
    }

    const student1 = new Student("Rezwan", 20, "Male", 101, "123 Street, City", "456 Avenue, City");
    const student1Address = student1.address();
    console.log(student1);
    console.log(student1Address);


    class Teacher extends Person {

        subject: string;

        constructor(name: string, age: number, gender: string, subject: string) {
            super(name, age, gender);
            this.subject = subject;
        }

        getSleeps(numberOfHours: number): string {
            return `${this.name} sleeps for ${numberOfHours} hours.`;
        }

        takeClass(numberOfClasses: number): string {
            return `${this.name} takes ${numberOfClasses} classes.`;
        }
    }

    const teacher1 = new Teacher("Alice", 35, "Female", "Physics");
    console.log(teacher1);
    console.log(teacher1.getSleeps(7));
    console.log(teacher1.takeClass(3));
}

