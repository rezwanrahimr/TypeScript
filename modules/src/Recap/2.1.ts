// type assertions
const multiplyNumbers = (num: number | string | null) => {
    if (typeof num === 'number') {
        return num * 2;
    }
    else if (typeof num === 'string') {
        return parseInt(num) * 2;
    } else {
        return 0;
    }
}

const resultMultiply = multiplyNumbers(10) as number;
