/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type enrolled = {
    student: string;
    course: string;
    score: number;
    completed: boolean;
    duration: number;
}
const enrollments : enrolled[] = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function totalEnrollments (data: enrolled[]): number {
    return data.length;
}

function getCompleteCount(data: enrolled[]): number {
    return data.filter(filter => filter.completed).length
}

function getIncompleteCount(data: enrolled[]): number {
    return data.filter(filter => !filter.completed).length
}

function getCompletePercentage(data: enrolled[]): number {
    const total = totalEnrollments(data);
    const completed = getCompleteCount(data);
    return total === 0 ? 0 : (completed / total) * 100;
}

function getHighestScore(data: enrolled[]): number {
    return Math.max(...data.map (item => item.score));
}

function getLowestScore(data: enrolled[]): number {
    return Math.min(...data.map (item => item.score));
}

function getAverageScore(data: enrolled[]): number {
    if (data.length === 0 ) {
        return 0;
    }
    const total = data.reduce ((sum,item) => sum + item.score,0);
    return total / data.length;
}

function getPassingStudent(data: enrolled[]): string[] {
    return data.filter(item => item.score >= 75).map(item => item.student);
}

function getStudentperCourse(data: enrolled[]): string[] {
    return[...new Set(data.map(item => item.course))];
}

function getAverageStudentinCourse(data: enrolled[],course: string): number {
    const courseData = data.filter(item => item.course === course);
    return getAverageScore(courseData);
}

function TotallearningHour(data: enrolled[]): number {
    return data.reduce((total,item) => total + item.duration,0);
}

function getAverageLearningDuration(data: enrolled[]): number {
    if (data.length === 0) {
        return 0;
    }
    return TotallearningHour(data) / totalEnrollments(data);
}

function printCompletionAndAcademicStatistic(data: enrolled[]): void {
    console.log("Completion Statistics");
    console.log(" ");
    console.log("Total Enrollments: ",totalEnrollments(data));
    console.log("Complete Enrollments: ",getCompleteCount(data));
    console.log("Incomplete enrollments: ",getIncompleteCount(data));
    console.log("Completion percentage: ",getCompletePercentage(data));
    console.log(" ");
    console.log("Academic Statistics");
    console.log(" ");
    console.log("Highest Score: ",getHighestScore(data));
    console.log("Lowest Score: ",getLowestScore(data));
    console.log("Average Score: ",getAverageScore(data));
    console.log("Student Passing with Score more than 75: ",getPassingStudent(data).join(", "));
}

function printCourseStatisticAndLearningStatistic(data: enrolled[]): void {
    console.log("Course Statistic");
    console.log(" ");
    console.log("Number Student enrolled in each course: ",getStudentperCourse(data));
    console.log("Average score each course: ",getAverageStudentinCourse(data,"Backend"));
    console.log(" ");
    console.log("Learning Statistic");
    console.log(" ");
    console.log("Total learning hours: ",TotallearningHour(data));
    console.log("Average learning duration: ",getAverageLearningDuration(data));
}

printCompletionAndAcademicStatistic(enrollments);
printCourseStatisticAndLearningStatistic(enrollments);