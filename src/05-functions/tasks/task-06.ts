/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

import { count } from "node:console";

const transactions = [250000, 750000, 500000, 1000000, 300000];
function calculateTotalSales(sales: number[]): number {
    let total = 0;

    for (const amount of transactions) {
        total += amount;
    }
    return total;
}

function findHighestTransaction(sales: number[]): number {
    let highest = transactions[0];

    for (const amount of transactions) {
        if (amount > highest) {
            highest = amount;
        }
    }
    return highest;
}

function findLowestTransaction(sales: number[]): number {
    let lowest = transactions[0];

    for (const amount of transactions) {
        if (amount < lowest) {
            lowest = amount;
        }
    }
    return lowest;
}

function calculateAverageSale(sales: number[]): number {
    let total = 0;

    for (const amount of transactions) {
        total += amount;
    }
    const average = total/transactions.length;
    return average;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
    let count = 0;

    for (const amount of transactions) {
        if (amount > minimumAmount) {
            count++;
        }
    }
    return count;
}

const highestSales = findHighestTransaction(transactions);
const lowestSales = findLowestTransaction(transactions);
const averageSales = calculateAverageSale(transactions);
const largeSales = countLargeTransactions(transactions, 500000);
const totalSales = calculateTotalSales(transactions);

console.log("Highest transaction: ",highestSales);
console.log("Lowest transaction: ",lowestSales);
console.log("Average transaction: ",averageSales);
console.log("Large transaction: ",largeSales);
console.log("Total transaction: ",totalSales);