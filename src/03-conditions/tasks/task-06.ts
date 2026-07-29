/**
 * A hospital emergency department must determine the priority level of every arriving patient.
 * The hospital follows these rules:
 * 1. If the patient's condition is critical, they are immediately assigned to the Emergency Room.
 * 2. Otherwise, if the patient has an appointment:
 *  - Elderly patients (age ≥ 60) receive Priority Queue.
 *  - Other patients receive Regular Queue.
 * 3. Otherwise:
 *  - Patients with health insurance are assigned to the Insurance Registration Counter.
 *  - Patients without insurance are assigned to the General Registration Counter.
 * 
 * Today's patient information:
 * | Information        | Value      |
 * | ------------------ | ---------- |
 * | Patient Name       | Siti Rahma |
 * | Critical Condition | No         |
 * | Has Appointment    | Yes        |
 * | Age                | 67         |
 * | Has Insurance      | Yes        |
 * 
 * Tasks: 
 * 1. Declare all required variables.
 * 2. Implement the hospital workflow using conditional statements.
 * 3. Display the patient's destination.
 */



const patientName = "Siti Rahma";
const isCriticalCondition = false;
const isHasAppointment = true;
const age = 67;
const isHasInsurance = true;

let destination;

if (isCriticalCondition) {
    destination = "Emergency Room";
} else if (isHasAppointment) {
   if (age > 60) {destination = "Priority Queue";
 } else {
    destination = "Regular Queue";
 }
} else {
    if (isHasInsurance) {
        destination = "Insurance Registration Counter."
    } else {
        destination = "General Registration Counter."
    }
}

console.log("Patient Name = ",patientName);
console.log("Critical Condition =",isCriticalCondition);
console.log("Has Appointment =",isHasAppointment);
console.log("Age =" ,age);
console.log("Has Insurance = ",isHasInsurance);
console.log("-------------------------------------");
console.log("Patient Destination = ",destination);
