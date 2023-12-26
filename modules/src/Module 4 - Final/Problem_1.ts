/* Functions and Default Parameters

Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3. */

function textGenerator(text: string, num?: number) {
    let newNumber = num ? num : 3;

    for (var i = 0; i < newNumber; i++) {
        console.log(text);
        if (i === newNumber) {
            break;
        }
        else {
            continue;
        }
    }
}

textGenerator("Hello World, How Are You.",10);