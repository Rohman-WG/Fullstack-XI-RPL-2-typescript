/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardPrice = 850000;
const keyboardQuantity = 1;

const mousePrice = 275000;
const mouseQuantity = 2;

const mousepadPrice = 120000;
const mousepadQuantity = 1;

const isPremium = true;

const subtotal =
(keyboardPrice * keyboardQuantity) +
(mousePrice * mouseQuantity) +
(mousepadPrice * mousepadQuantity);

let totalItems= 0;

for (let i = 0; i < keyboardQuantity; i++) totalItems++;
for (let i = 0; i < mouseQuantity; i++) totalItems++;
for (let i = 0; i < mousepadQuantity; i++) totalItems++;

let discount = 0;


if (subtotal > 1000000) {
   discount = subtotal * 0.1;
}

if (isPremium) {
    console.log("Free Shipping");
} else {
    console.log("Shipping Fee Applies");
}

const finalpayment = subtotal - discount;

console.log("Subtotal:", subtotal);
console.log("Total Items:", totalItems);
console.log("Discount:", discount);
console.log("Final Payment:", finalpayment);