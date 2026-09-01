import { availableParallelism } from "node:os";

/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const averageScores = employees.map(employe => 
    {const totalScore = employe.projects.reduce((total, project) => total + project.score,0)
const averageScore = totalScore / employe.projects.length
return {name : employe.name, averageScore : averageScore}
})
console.log("AVERAGE SCORE")
console.log(averageScores)

const above85 = averageScores.filter(average => average.averageScore > 85)
console.log("EMPLOYES AVERAGE SCORE ABOVE 85")
console.log(above85)

const below80 = averageScores.filter(average => average.averageScore < 80)
console.log("EMPLOYES AVERAGE SCORE BELOW 80")
console.log(below80)