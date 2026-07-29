/**
 * A company evaluates employees every month.
 * If an employee's performance score is 80 or above, they receive a performance bonus.
 * Otherwise, they do not receive a bonus.
 * Employee information:
 * | Information       | Value         |
 * | ----------------- | ------------- |
 * | Employee Name     | Dimas Pratama |
 * | Performance Score | 78            |
 * 
 * Tasks:
 * 1. Declare the variables.
 * 2. Use an if...else statement.
 * 3. Display the evaluation result. If eligible will display "Bonus Approved", 
 * otherwise display "Bonus not approved"
 */

const employeeName = "Dimas Pratama";
const performanceScore = 78;
const hasBonus = true;

console.log("Employee Name =",employeeName);
console.log("Bonus = ",hasBonus);

if (performanceScore <= 80) {
    console.log("Bonus Approved");
} else {
    console.log("Bonus not approved");
}