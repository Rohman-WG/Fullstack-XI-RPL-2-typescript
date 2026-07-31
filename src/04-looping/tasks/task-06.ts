/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let outOfStock = 0;
let lowStock = 0;
let safeStock = 0;
let totalStocks = 0;

for (let i = 0; i < stocks.length; i++) {
    totalStocks = stocks[i];
    if (outOfStock = 0) {
        outOfStock++;
    } else if (lowStock < 10) {
        lowStock++;
    } else {
        safeStock++;
    }
}

let averageStocks = totalStocks / stocks.length;

console.log(`Out of stock at warehouse: ${outOfStock}`);
console.log(`Low stock at warehouse: ${lowStock}`);
console.log(`Safe stock at warehouse: ${safeStock}`);
console.log(`Total inventory at warehouse: ${totalStocks}`);
console.log(`Average stock in inventory: ${averageStocks}`);