/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPriceperNight = 650000;
const nightStayed = 4;
const serviceCharge = 120000;
const tax = 0.11;
const isVip = true;

const roomSubTotal = roomPriceperNight * nightStayed;

let discount = 0; 
    if (isVip) {
        discount = roomSubTotal * 0.12;
    }

const discountedRoom = roomSubTotal - discount;
const taxed = discountedRoom * tax;
const finalPayment = discountedRoom + taxed + serviceCharge;
const freeBreakfast = nightStayed >= 3 || isVip;

console.log("Room Subtotal:", roomSubTotal);
console.log("Discount:", discount);
console.log("Tax:", taxed);
console.log("Final Payment:", finalPayment);
console.log("Free Breakfast:", freeBreakfast);