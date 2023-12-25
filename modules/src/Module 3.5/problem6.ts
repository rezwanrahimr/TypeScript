/* Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
 */

/* interface Person {
  name: string;
  age: number;
  email: string;
}

function findPerson(persons: Person[], email: string): Person | string {
  const getPerson = persons.find((person) => person.email === email);
  return getPerson ? getPerson : "No Match is Found !";
}

let persons: Person[] = [
  { name: "Rezwan Rahim", age: 23, email: "rezwanrahim69@gmail.com" },
  { name: "rezwan rahim rupak", age: 34, email: "rezwanrahim99@gmail.com" },
];

console.log(findPerson(persons, "rezwanrahim99@gmail.com"));
 */
