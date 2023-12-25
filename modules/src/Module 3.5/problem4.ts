// /* Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
//  */

// type Product = {
//   productName: string;
//   price: number;
//   quantity: number;
// };

// function CalculateProduct<T extends Product[]>(product: T): number {
//   let total = 0;
//   product.forEach((item) => {
//     total = total + item.price * item.quantity;
//   });
//   return total;
// }

// const products: Product[] = [
//   { productName: "Shirt", price: 20, quantity: 3 },
//   { productName: "Jeans", price: 30, quantity: 2 },
// ];

// const totalAmount = CalculateProduct(products);
// console.log(`Total Amount of Products ${totalAmount}`);
