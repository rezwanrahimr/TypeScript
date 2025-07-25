// learning functions in typescript
// normal function
// arrow function


function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

const addNumbersArrow = (num1: number, num2: number): number => num1 + num2;

const user = {
    name: 'Rezwan',
    balance: 0,
    addBalance(balance: number): number {
        return this.balance + balance;
    }
}

const numbers: number[] = [1, 2, 3, 4, 5];
const result = numbers.map((element: number): number => element * element);

function generateHello(message: string): string {
    return `Hello ${message}`;
}