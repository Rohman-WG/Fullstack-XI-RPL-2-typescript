/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

const studentName = students.map((students) => 
  {return students.name})
console.log("STUDENT NAME")
console.log(studentName)

const studentPassed = students.filter((students) => 
  {return students.score >= 70})
console.log("STUDENT PASSED")
console.log(studentPassed)

const findStudent = students.find((students) => 
  {return students.name === "Citra"})
console.log("STUDENT CITRA")
console.log(findStudent)

const score = students.reduce((total, students) => 
  {return total + students.score},0)
const averageScore = score / students.length

console.log("AVERAGE SCORE")
console.log(averageScore)