// TypeScript Abstraction

// Interface Abstraction
/* interface IVehicle {
  startEngine(): void;
  movingVehicle(): void;
  stopEngine(): void;
}

class Vehicle implements IVehicle {
  startEngine(): void {
    console.log("start engine....");
  }
  movingVehicle(): void {
    console.log("vehicle moving....");
  }
  stopEngine(): void {
    console.log("stop engine....");
  }
}

const vehicle = new Vehicle();
vehicle.startEngine();
vehicle.movingVehicle();
vehicle.stopEngine(); */

// Abstract Class
/* abstract class Vehicle {
  abstract startEngine(): void;
  abstract movingVehicle(): void;
  abstract stopEngine(): void;
}

class MotorChicle extends Vehicle {
  startEngine(): void {
    console.log("engine starting...");
  }
  movingVehicle(): void {
    console.log("vehicle moving....");
  }
  stopEngine(): void {
    console.log("engine stop");
  }
}

const vehicle = new MotorChicle();
vehicle.startEngine();
vehicle.movingVehicle();
vehicle.startEngine(); */
