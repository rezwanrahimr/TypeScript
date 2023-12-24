// // Type assertions instruct the TypeScript compiler to treat a value as a specified type.

// function kgTogram(gram: string | number): string | number | void {
//   if (typeof gram === "number") {
//     const value = gram * 1000;
//     return value;
//   }
//   if (typeof gram === "string") {
//     const value = parseFloat(gram) * 1000;
//     return `The Result is : ${value}`;
//   }
// }

// const getKgTogramNumber = kgTogram(20) as number;
// const getKgTogramString = kgTogram("20") as string;
