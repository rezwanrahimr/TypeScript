/* Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.
 */

function sendText(text: unknown) {
    if (typeof text === 'string') {
        console.log(text);
    }
    else {
        console.log("Something Went Wrong...")
    }
}

sendText(3);