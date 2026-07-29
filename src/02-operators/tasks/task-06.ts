/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const pricePerHours = 8000;
const hours = 7;
const minutes = 35;

const totalMinutes = (hours * 60) + minutes;
const remainingMinutes = totalMinutes % 60;

let billingHours = Math.floor(totalMinutes / 60);
if (remainingMinutes > 0) {
    billingHours++;
}

const totalPayment = billingHours * pricePerHours;

let discount = 0;
if(billingHours > 5) {
    discount = totalPayment * 0.15;
}

const finalPayment = totalPayment - discount;

console.log("Total Minutes:", totalMinutes);
console.log("Remaining Minutes:", remainingMinutes);
console.log("Billed Hours:", billingHours);
console.log("Payment Before Discount:", totalPayment);
console.log("Discount:", discount);
console.log("Final Payment:", finalPayment);