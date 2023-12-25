class Calculator {
  static value: number = 0;

  Increment(addNumber: number) {
    return (Calculator.value = Calculator.value + addNumber);
  }
  Decrement(addNumber: number) {
    return (Calculator.value = Calculator.value - addNumber);
  }
}

const newNumber = new Calculator();
newNumber.Increment(2);
newNumber.Decrement(1);
console.log(Calculator.value);
