class Counter {
    static count: number = 0;

    static increment(value: number) {
        return (Counter.count = Counter.count + value);
    }

    static decrement(value: number) {
        return (Counter.count = Counter.count - value);
    }
}

const instance1 = new Counter();
console.log(Counter.increment(5)); // 5

console.log(Counter.decrement(2)); // 3