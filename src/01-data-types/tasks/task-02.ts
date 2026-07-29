/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

const custName: string = "Customer";
const member: Boolean = true;
const stock: number = 18;
const discount: number = 0.25;
const keyboard: [string, string] = ["Keyboard RGB", "KBR-001"];
const harga: number = 850000;
const quantity: number = 2;

console.log(custName+ " membeli " + keyboard);
console.log("Sejumlah "+ quantity +" Buah");
console.log("Seharga "+ harga +" Rupiah per unit");
console.log("Member "+ member);
console.log("Karena memiliki member mendapatkan diskon sebanyak "+ discount);
console.log("Unit yang tersisa "+ stock);
