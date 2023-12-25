// Convert the following JavaScript array into a TypeScript tuple
const userInfo = [101, "Ema", "John", true, , "2023"];

let tuple: [number, string, string, boolean, null, string] = userInfo as [
  number,
  string,
  string,
  boolean,
  null,
  string
];

console.log(tuple);
