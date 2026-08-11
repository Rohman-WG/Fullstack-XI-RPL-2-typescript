/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
    let highestScore = scores[0];
    
    for (const score of scores) {
        if (score > highestScore) {
            highestScore  = score;
        }
    }
    return highestScore;
}


function findLowestScore(scores: number[]): number {
    let  lowestScore = scores[0];

    for (const score of scores) {
        if (score < lowestScore) {
            lowestScore = score;
        }
    }
    return lowestScore;
}

function calculateAverage(scores: number[]): number {
    let total = 0;

    for (const score of scores) {
        total += score;
    }
    const average = total/scores.length;
    return average;
}

function countPassedStudents(scores: number[]): number {
    let passed = 0;

    for (const score of scores) {
        if (score >= 80) {
            passed++;
        } 
    }
    return passed;
}


const highestGrades = findHighestScore(scores);
const lowestGrades = findLowestScore(scores);
const averageGrades = calculateAverage(scores);
const passedStudent = countPassedStudents(scores);

console.log("Highest Grade: ",highestGrades);
console.log("Lowest Grade: ",lowestGrades);
console.log("Average Grade: ",averageGrades);
console.log("Passed Student: ",passedStudent);