/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

const students: Student[] = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

type Student = {
    name: string;
    score: number;
    attendance: number;
};

type PASS_FAIL = "Pass" | "Fail";
type ACADEMIC_PERFORMANCE = "Excellent" | "Good" | "Needs Improvement";
type ATTENDANCE_STATUS = "Good Attendance" | "Poor Attendance";
type RECOMMENDATION = "Excellent" | "Good" | "Improve Attendance" | "Improve Academic Performance";
type STUDENT_STATUS = Student & {status: PASS_FAIL;};
type STUDENT_ACADEMIC = Student & {academicPerformance: ACADEMIC_PERFORMANCE;};
type STUDENT_ATTENDANCE = Student & {attendanceStatus: ATTENDANCE_STATUS;};
type STUDENT_RECOMMENDATION = Student & {recommendation: RECOMMENDATION;};

function getPassFail(student: Student): STUDENT_STATUS {
    let status: PASS_FAIL;
    if (student.score >= 75 && student.attendance >= 90) {
        status = "Pass";
    } else {
        status = "Fail";
    }
    return {
        ...student, status
    };
}

function getAcademicPerformance(student: Student): STUDENT_ACADEMIC {
    let academicPerformance: ACADEMIC_PERFORMANCE;
    if (student.score >= 90) {
        academicPerformance = "Excellent";
    } else if (student.score >= 75) {
        academicPerformance = "Good";
    } else {
        academicPerformance = "Needs Improvement";
    }
    return {
        ...student, academicPerformance
    };
}

function getAttendanceStatus(student: Student): STUDENT_ATTENDANCE {
    let attendanceStatus: ATTENDANCE_STATUS;
    if (student.attendance >= 90) {
        attendanceStatus = "Good Attendance";
    } else {
        attendanceStatus = "Poor Attendance";
    }
    return {
        ...student, attendanceStatus
    };
}

function getRecommendation(student: Student): STUDENT_RECOMMENDATION {
    let recommendation: RECOMMENDATION;
    if (student.score >= 90 && student.attendance >= 90) {
        recommendation = "Excellent";
    } else if (student.score >= 75 && student.attendance >= 90) {
        recommendation = "Good";
    } else if (student.score >= 75 && student.attendance < 90) {
        recommendation = "Improve Attendance";
    } else {
        recommendation = "Improve Academic Performance";
    }
    return {
        ...student, recommendation
    };
}

function processStudents<T>(
    arr: Student[],
    callback: (student: Student) => T
): T[] {
    return arr.map(callback);
}

const studentsPassFail = processStudents(students, getPassFail);
const studentsAcademic = processStudents(students, getAcademicPerformance);
const studentsAttendance = processStudents(students, getAttendanceStatus);
const studentsRecommendation = processStudents(students, getRecommendation);

console.log(" PASS / FAIL ");
console.log(studentsPassFail);
console.log(" ACADEMIC PERFORMANCE ");
console.log(studentsAcademic);
console.log(" ATTENDANCE STATUS ");
console.log(studentsAttendance);
console.log(" RECOMMENDATION ");
console.log(studentsRecommendation);