/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

import { setUncaughtExceptionCaptureCallback } from "node:process";
import { compileFunction } from "node:vm";

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];

const subtotal = cart.reduce((total, item) => 
    {return total + item.price * item.quantity},0)
console.log("SUBTOTAL OF ALL PRODUCTS")
console.log(subtotal)

let discount = 0
if (subtotal > 3000000) {
    discount = subtotal * 0.10
} else if (subtotal > 1500000) {
    discount = subtotal * 0.05
}
console.log("DISCOUNT")
console.log(discount)

const finalsubtotal = subtotal - discount
console.log("FINAL SUBTOTAL")
console.log(finalsubtotal)

const expensiveProducts = cart.filter(item => 
    {return item.price > 1000000})
console.log("EXPENSIVE PRODUCTS")
console.log(expensiveProducts)