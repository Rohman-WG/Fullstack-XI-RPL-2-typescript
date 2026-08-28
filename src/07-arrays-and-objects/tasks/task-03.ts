/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];


const studentPresent = attendance.filter(item => item.status === "present")
    .map(item => {
        const student = students.find(students => students.id === item.studentId)
        return student?.name
    }) 
console.log("STUDENT WHO PRESENT")
console.log(studentPresent)

const studentNotPresent = attendance.filter(item => item.status === "absent")
    .map(item => {
        const student = students.find(students => students.id === item.studentId)
        return student?.name
    }) 
console.log("STUDENT WHO NOT PRESENT")
console.log(studentNotPresent)

const studentLate = attendance.filter(item => item.status === "late")
    .map(item => {
        const student = students.find(students => students.id === item.studentId)
        return student?.name
    })
console.log("STUDENT WHO LATE")
console.log(studentLate)

const studentStatus = attendance.map(item => {
    const student = students.find(students => students.id === item.studentId)
    return {name: student?.name, status: item.status }
})
console.log("STUDENT STATUS")
console.log(studentStatus)