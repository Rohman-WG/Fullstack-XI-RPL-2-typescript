/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const keyboardPrice = 850000;
const keyboardQuantity = 1;

const mousePrice = 275000;
const mouseQuantity = 2;

const monitorStandPrice = 420000;
const monitorStandQuantity = 1;

const voucher = 100000;
const isPremium = true;
const pointRate = 0.11;

const subtotal = 
    (keyboardPrice * keyboardQuantity) +
    (mousePrice * mouseQuantity) +
    (monitorStandPrice * monitorStandQuantity);

let membershipDiscount = 0;

if (isPremium) {
    membershipDiscount = subtotal * 0.10;
}

const paymentBeforeTax =
    subtotal - membershipDiscount - voucher;

const vat = paymentBeforeTax * pointRate;
const finalPayment = paymentBeforeTax * vat;

const rewardPoint = Math.floor(paymentBeforeTax / 50000)
const  freeShipping = 
    isPremium || paymentBeforeTax > 1500000;

console.log("Subtotal = "+subtotal);
console.log("Membership Discount = "+membershipDiscount);
console.log("Voucher = "+voucher);
console.log("Payment Before Tax = "+paymentBeforeTax);
console.log("Vat = "+vat);
console.log("Final Payment = "+finalPayment);
console.log("Reward Points = "+rewardPoint);
console.log("Free Shipping = "+freeShipping);


