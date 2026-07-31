/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let studentsName = [];
let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let totalScores = 0;
let highestScores = students[0].score;
let lowestsScores = students[0].score;

for (let i = 0;i < students.length; i++) {
    let score = students[i].score;
    totalScores += score;

    if (score >= 90 ) {
        gradeA++;
    } else if (score >= 80) {
        gradeB++;
    } else if (score >= 70) {
        gradeC++;
    } else {
        gradeD++;
    }

    if (score < lowestsScores) {
        lowestsScores = score;
    }
}

let averagescores = totalScores / students.length;

console.log(`Number of student who recieve grade A: ${gradeA}`);
console.log(`Number of student who recieve grade B: ${gradeB}`);
console.log(`Number of student who recieve grade C: ${gradeC}`);
console.log(`Number of student who recieve grade D: ${gradeD}`);
console.log(`Highest Scores: ${highestScores}`);
console.log(`Lowest Scores: ${lowestsScores}`);
console.log(`Average Scores: ${averagescores}`);