// // TypeScript Polymorphism

// class Person {
//   getNap(): void {
//     console.log("I am sleeping 10 hours per day");
//   }
// }

// class Student extends Person {
//   getNap(): void {
//     console.log("I am sleeping 8 hours per day");
//   }
// }

// class Developer extends Person {
//   getNap(): void {
//     console.log("I am sleeping 6 hours per day");
//   }
// }

// function getSleep(value: Person) {
//   value.getNap();
// }

// const person1 = new Person();
// const person2 = new Student();
// const person3 = new Developer();

// // getSleep(person1);
// // getSleep(person2);
// // getSleep(person3);

// class Shape {
//   getShape(): number {
//     return 0;
//   }
// }

// class Rectangle extends Shape {
//   height: number;
//   weight: number;
//   constructor(height: number, weight: number) {
//     super();
//     this.height = height;
//     this.weight = weight;
//   }

//   getShape(): number {
//     return this.height * this.weight;
//   }
// }

// class Circle extends Shape {
//   radius: number;
//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }

//   getShape(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// function getAreaOfShape(param: Shape) {
//   console.log(param.getShape());
// }

// getAreaOfShape(new Rectangle(7, 9));
// getAreaOfShape(new Circle(6));
