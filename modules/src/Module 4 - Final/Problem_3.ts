/* Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.
 */

function reverse<T>(...value: T[]): T[] {
    return value.reverse();
}

const getValue = reverse<string>('hello', 'hi', 'how are you');
console.log(getValue);