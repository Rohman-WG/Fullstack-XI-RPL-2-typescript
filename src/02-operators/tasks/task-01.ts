/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const foodPrice = 18000;
const foodQuantity = 3;

const drinkPrice = 5000;
const drinkQuantity = 2;

const discount = 10000;

const totalFood = foodPrice * foodQuantity;
const totalDrink = drinkPrice * drinkQuantity;

const grandTotal = totalFood + totalDrink;

const finalPayment = grandTotal - discount;


console.log("Total harga makanan = "+totalFood);
console.log("Total harga minuman = "+totalDrink);
console.log("Total harga semuanya = "+grandTotal);
console.log("Total semua harga setelah diskon = "+finalPayment);