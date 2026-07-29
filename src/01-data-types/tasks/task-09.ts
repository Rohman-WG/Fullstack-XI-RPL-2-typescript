/**
 * A programming bootcamp stores information about every participant who registers for the Backend Development class. 
 * Since many students register for the same course, the system stores the participant data as a collection instead of creating separate variables.
 * Today, three students registered for the course.
| Student ID | Name           | Age | Has Paid |
| ---------- | -------------- | --- | -------- |
| ST001      | Ahmad Fauzi    | 16  | Yes      |
| ST002      | Siti Nurhaliza | 17  | No       |
| ST003      | Budi Santoso   | 16  | Yes      |


 * Task:
 * 1. Define a proper type for the participant information.
 * 2. Store the participant data in a single collection.
 * 3. Display the participant data using console.log.
 */

type Customer = {
    studentID: string;
    name: string;
    age: number;
    isHasPaid: boolean;
};

const customers: Customer[] = [
    {
        studentID: "ST001",
        name: "Ahmad Fauzi",
        age: 16,
        isHasPaid: true, 
    },

    {
        studentID: "ST002",
        name: "Siti Nurhaliza",
        age: 17,
        isHasPaid: false,
    },

    {
        studentID: "ST003",
        name: "Budi Santoso",
        age: 15,
        isHasPaid: true,
    }
];

console.log(customers[0])
console.log(customers[1])
console.log(customers[2])