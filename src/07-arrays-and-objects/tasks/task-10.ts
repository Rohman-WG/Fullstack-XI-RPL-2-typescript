import { fail } from "node:assert"
import { compileFunction } from "node:vm"

/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
]

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
]


const studentScores = submissions.map(submission => {
    const correct = submission.answers.filter(answer => {const question = questions.find(
    (question => question.id === answer.questionId))
        return question?.correctAnswer === answer.answer
    }).length
    return {student: submission.student, score: correct * 25,}})
console.log("STUDENT SCORE")
console.log(studentScores)

const studentResult = submissions.map(submission => {
    const correct = submission.answers.filter(answer => {const question = questions.find(
        (question => question.id === answer.questionId))
    return question?.correctAnswer === answer.answer
    }).length
    return {student: submission.student, correct: correct, wrong: submission.answers.length - correct}
})
console.log("STUDENT RESULTS")
console.log(studentResult)

const categoryScores: Record<string, number[]> = {}
questions.forEach((question) => {
    const scores: number[] = submissions.map((submission) => {
    const answer = submission.answers.find((answer) => answer.questionId === question.id)
        return answer?.answer === question.correctAnswer ? 25 : 0})
    if (!categoryScores[question.category]) {
        categoryScores[question.category] = []
    }
    const totalScore = scores.reduce((sum, score) => sum + score,0)
    categoryScores[question.category].push(totalScore)})
const categoryAverage = Object.entries(categoryScores).map(
    ([category, scores]) => {const totalScore = scores.reduce(
        (sum, score) => sum + score,0)
        const averageScore = totalScore / scores.length / submissions.length
        return {category,averageScore: Number(averageScore.toFixed(2))}
})
console.log("AVERAGE SCORES")
console.log(categoryAverage)

const scores = studentScores.map(student => student.score)
const totalStudents = submissions.length
const totalScores = scores.reduce((sum, score) => sum + score,0)
const averageScores = totalScores / totalStudents
const highestScore = Math.max(...scores)
const lowestScore = Math.min(...scores)
const passedStudent = scores.filter(score => score >= 75).length
const failedStudents = totalStudents - passedStudent
const passRate = (passedStudent / totalStudents) * 100
const finalAnalytics = {
    totalStudents, averageScores, 
    highestScore, lowestScore, 
    passedStudent, failedStudents, 
    passRate: Number(passRate.toFixed(2))
}
console.log("FINAL ANALYTICS")
console.log(finalAnalytics)