/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const customerName = "Nadia Putri";
const isPremium = true;
const isAvailable = false;

console.log("=== Hotel Reservation System ===");
console.log("Customer Name = ", customerName);
console.log("Premium Member = ", isPremium);
console.log("Room Available = ", isAvailable);

let reservationResult;

if (!isAvailable) {
    if (isPremium) {
        reservationResult = "Free room upgrade.";
    } else {
        reservationResult  = "Reservation confirmed.";
    }
} else {
    if (isPremium) {
        reservationResult = "You are placed in priority waiting list.";
    } else {
        reservationResult = "No rooms are available";
    }
}