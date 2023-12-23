// TypeScript Class & Object
class Car {
  //   carName: String;
  //   model: String;
  constructor(public carName: string, public model: string) {
    // initialize the object property
    // this.carName = carName;
    // this.model = model;
  }

  //   Method
  getCarDetails() {
    console.log(`Car Name :${this.carName}\nCar Model:${this.model}`);
  }
}

// creating objects (instance) of the class.
const getCar = new Car("Toyota Camry", "Toyota 2880");
getCar.getCarDetails();
