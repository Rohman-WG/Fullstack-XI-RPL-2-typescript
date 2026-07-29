/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Employee = {
    ID: string;
    employeeName: string;
    date: Date;
    inTime: Date;
    outTime: Date;
    totalWorkTime: number;
    isPresent: boolean;
};

const employees: Employee[] = [
    {
        ID: "SK78623",
        employeeName: "Rizki",
        date: new Date ("2026-07-25"),
        inTime: new Date ("2026-07-25T08:06:30"),
        outTime: new Date ("2026-07-25T08:18:00"),
        totalWorkTime: 690,
        isPresent: true,
    },
    {
        ID: "SK90122",
        employeeName: "Yanto",
        date: new Date ("2026-07-26"),
        inTime: new Date ("2026-07-26T09:06:00"),
        outTime: new Date ("2026-07-26T09:18:00"),
        totalWorkTime: 720,
        isPresent: true,
    },
    {
        ID: "SK78327",
        employeeName: "Sadra",
        date: new Date ("2026-07-27"),
        inTime: new Date ("2026-07-27T10:06:30"),
        outTime: new Date ("2026-07-27T10:17:30"),
        totalWorkTime: 660, 
        isPresent: false,
    },
];

console.log(employees);