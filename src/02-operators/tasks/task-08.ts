/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter = 25640;
const currentMeter = 25892;
const pricePerKwh = 1650;

const solarPanel = true;
const energySavingMode = false;

const energyConsumption = currentMeter - previousMeter;
const electricityBill = energyConsumption * pricePerKwh;

let discount = 0;
if (solarPanel) {
    discount += electricityBill * 0.20;
}

if (energySavingMode) {
    discount += electricityBill * 0.05;
}

const finalBill = electricityBill - discount;

const greenEnergyEligible =
    solarPanel &&
    energyConsumption < 300 &&
    energySavingMode;

console.log("Energy Consumption:", energyConsumption, "kWh");
console.log("Electricity Bill:", electricityBill);
console.log("Final Bill:", finalBill);
console.log("Green Energy Eligible:", greenEnergyEligible);