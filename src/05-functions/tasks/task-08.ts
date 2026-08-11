/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

const passingScore:number = 75;

function getTotalStudent (data: typeof submissions): number {
    return data.length;
}

function getSubmittedCount (data: typeof submissions): number {
    return data.filter(item => item.submitted).length;
}

function getMissingCount (data: typeof submissions): number {
    return data.filter(item => !item.submitted).length;
}

function getPassedCount (data: typeof submissions): number {
    return data.filter(item => item.submitted && item.score >= passingScore).length;
}

function getRevisionCount (data: typeof submissions): number {
    return data.filter(item => item.submitted && item.score < passingScore).length;
}

function getAverageCount (data: typeof submissions): number {
    const totalScore = data.reduce((total, item) => total + item.score, 0);
    return totalScore / data.length;
}

function getHighestCount (data: typeof submissions): number {
    return Math.max (...data.map (item => item.score));
}

function getLowestCount (data: typeof submissions): number {
    return Math.min (...data.map (item => item.score));
}

function displayReport(data: typeof submissions): void {
    console.log("LMS Report:");
    console.log("Total student: ",getTotalStudent(data));
    console.log("Submitted Assignments: ",getSubmittedCount(data));
    console.log("Missing Assignments: ",getMissingCount(data));
    console.log("Passed Assignments: ",getPassedCount(data));
    console.log("Revise Assignments: ",getRevisionCount(data));
    console.log("Average score: ",getAverageCount(data));
    console.log("Highest score: ",getHighestCount(data));
    console.log("Lowest score: ",getLowestCount(data));
}

displayReport(submissions);