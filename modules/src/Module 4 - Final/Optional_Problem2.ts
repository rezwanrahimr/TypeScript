/* Create a TypeScript program that uses a conditional type to create a new type that is either a string or a number, depending on whether a parameter of type string or number is passed to the function.

Then, create an interface for a person with properties name and age, and use the new type as a constraint on the age property.

Finally, create an object that satisfies the Person interface and log it to the console. */


type StringOrNumber<T> = T extends string ? string : number;

function generator<T extends string | number>(type: T, personName: string, personAge: StringOrNumber<T>) {
    interface IPerson {
        name: string;
        age: StringOrNumber<T>;
    }

    const person: IPerson = {
        name: personName,
        age: personAge,
    };

    console.log(person);
}

generator(23, 'rezwan', 23); 
