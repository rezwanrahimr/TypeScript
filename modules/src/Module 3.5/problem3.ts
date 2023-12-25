/* You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety. */

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

function filterProduct<T extends Product>(
  products: T[],
  type: keyof Product,
  value: T[keyof Product]
): T[] {
  const getProduct = products.filter((product: T) => product[type] === value);
  return getProduct;
}
const productData = [
  { id: 1, name: "Product one", price: 23, category: "new" },
  { id: 2, name: "Product two", price: 30, category: "old" },
];
const getProducts = filterProduct<Product>(productData, "category", "old");

console.log(getProducts);
