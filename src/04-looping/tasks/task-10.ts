/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submittedCount = 0;
let notSubmittedCount = 0;
let studentPassed = 0;
let reviseCount = 0;
let totalScores = 0;

const studentRevise = [];
const notSubmitted = [];

for (const student of submissions) {
    if (!student.submitted) {
        student.score = 0;
    }
    totalScores += student.score;
    if (student.submitted) {
        submittedCount++;
    } else {
        notSubmittedCount++;
        notSubmitted.push(student.student);
    }
    if (student.score >= 75) {
        studentPassed++;
    }
    if (student.submitted && student.score < 75) {
        reviseCount++;
        studentRevise.push(student.student);
    }
}

const averagescores = totalScores / submissions.length;

console.log(`Student who submitted: ${submittedCount}`);
console.log(`Student who not submitted: ${notSubmittedCount}`);
console.log(`Student who must revise: ${reviseCount}`);
console.log(`Student who passed: ${studentPassed}`);
console.log("\n Student not Submitted");
for (const student of notSubmitted) {
    console.log("- " + student);
}
console.log("\n Student Passed");
for (const student of studentRevise) {
    console.log("- " + student);
}
console.log(`CLass Average Score: ${averagescores}`);