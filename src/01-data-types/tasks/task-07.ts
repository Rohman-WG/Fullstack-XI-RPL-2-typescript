/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
    student: {
        studentId: string;
        fullName: string;
        gradeLevel: number;
    };
    course: {
        courseId: string;
        courseTitle: string;
        instructorName: string;
        totalLearningHours: number;
    };
    registrationDate: string;
    paymentCompleted: boolean;
};

const registration1: Registration = {
    student: {
        studentId: "ST90",
        fullName: "Nadhifa Humaida",
        gradeLevel: 2,
    },
    course: {
        courseId: "BK-02",
        courseTitle: "Bimbingan Konseling",
        instructorName: "Bu Ida Astuti",
        totalLearningHours: 8,
    },
    registrationDate: "2026-08-09",
    paymentCompleted: false,
};

const registration2: Registration = {
    student: {
        studentId: "ST89",
        fullName: "Sherina Novita Humaida",
        gradeLevel: 1,
    },
    course: {
        courseId: "ENG-21",
        courseTitle: "English",
        instructorName: "Pak Anas",
        totalLearningHours: 6,
    },
    registrationDate: "2026-07-12",
    paymentCompleted: true,
};

const registration3: Registration = {
    student: {
        studentId: "ST45",
        fullName: "Ariel Adji Julianto",
        gradeLevel: 3,
    },
    course: {
        courseId: "IDN-06",
        courseTitle: "Bahasa Indonesia",
        instructorName: "Pak Fajrul Fallah",
        totalLearningHours: 5,
    },
    registrationDate: "2026-09-13",
    paymentCompleted: true,
};

console.log(registration1);
console.log(registration2);
console.log(registration3);