/**
 * SMK Telkom Malang calculates each student's final score using several assessment components. 
 * Before calculating the final grade, the system stores every assessment score as a separate variable. 
 * The homeroom teacher entered the following information for one student. 
 * The student named Nadia Putri has a student ID of ST2026045. She earned 88.5 on assignments, 
 * 84 on the midterm exam, and 91.5 on the final exam. Because she submitted every assignment before the deadline, 
 * she received an attendance score of 100. The school also records that Nadia participates in extracurricular activities, 
 * so this information should also be stored.
 * 
 * Task:
 * 
 * 1. dentify all values that should be stored as variables.
 * 2. Determine the most appropriate data type for each variable.
 * 3. Create the variable declarations using TypeScript.
 * 4. Display the student data using console.log.
 */

const studentName: [string, string] = ["Nadia Putri", "XI RPL"];
const ID: string = "ST2026045";
const Assignments: number = 88.5;
const Midexam: number = 84;
const Finalexam: number = 91.5;
const Attendance: number = 100; 
const subjects: Array<string> = ["Assignments, Midterm, Final, Attendance"];

console.log("Nama murid "+ studentName);
console.log("ID "+ ID);
console.log("Nilai "+ Assignments + Midexam + Finalexam + Attendance);
console.log("Subjek asesmen "+ subjects);

