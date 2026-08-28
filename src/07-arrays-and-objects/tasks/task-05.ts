/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

console.log("EXAM ANALYTICS")

const studentScores = students.map((student) => {
    const correctCount = student.answers.filter(
    (answer, index) => answer === correctAnswers[index]).length 
const score = correctCount * 20
return {...student, score,}
})
console.log("STUDENT SCORE")
console.log(studentScores)

const passedStudent = studentScores.filter((student) => student.score > 70)
console.log("PASSED STUDENT")
console.log(passedStudent)

const highestScore = studentScores.reduce((highest, student) => 
    student.score ? student : highest)
console.log("HIGHEST SCORE")
console.log(highestScore)

const totalScore = studentScores.reduce((sum, student) =>
    sum + student.score,0)
const averageScore = totalScore / studentScores.length
console.log("AVERAGE SCORE")
console.log(averageScore)