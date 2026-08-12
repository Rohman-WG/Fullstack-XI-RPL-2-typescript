/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of Transaction above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
    let total = 0;

    for (const amount of sales) {
        total += amount;
    }
    return total;
}

function findHighestTransaction(sales: number[]): number {
    let highest = sales[0];

    for (const amount of sales) {
        if (amount > highest) {
            highest = amount;
        }
    }
    return highest;
}

function findLowestTransaction(sales: number[]): number {
    let lowest = sales[0];

    for (const amount of sales) {
        if (amount < lowest) {
            lowest = amount;
        }
    }
    return lowest;
}

function calculateAverageSale(sales: number[]): number {
    let total = 0;

    for (const amount of sales) {
        total += amount;
    }
    const average = total/sales.length;
    return average;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
    let count = 0;

    for (const amount of sales) {
        if (amount > minimumAmount) {
            count++;
        }
    }
    return count;
}