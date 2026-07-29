/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
    fullname: string;
    ID: number;
    age: number;
    isStudent: boolean;
};

const Student = {
    fullname: "Aryo Cahyo Kalingga",
    ID: 19293,
    age: 17,
    isStudent: true,
};
const Student2 = {
    fullname: "Elzhar Ararya adam",
    ID: 89211,
    age: 16,
    isStudent: false,
};
const Student3 = {
    fullname: "Nadhifa Cahya Kurnia",
    ID: 92102,
    age: 18,
    isStudent: true,
};

console.log(Student);
console.log(Student2);
console.log(Student3);