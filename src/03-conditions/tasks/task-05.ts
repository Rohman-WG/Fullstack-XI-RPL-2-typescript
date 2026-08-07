/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */


const student = [
    {name: "Hasan Hidayah", GPA: 3.75, familyIncome: 41500000, isHasDisRecord: false, documentsComplete: false, Competition: 4},
    {name: "Fajar Hidayat", GPA: 3.86, familyIncome: 4200000, isHasDisRecord: false, documentsComplete: true, Competition: 5},
    {name: "Angelina Joly", GPA: 3.96, familyIncome: 8000000, isHasDIsRecord: false, documentsComplete: true, Competition: 1},
    {name: "Tom holland", GPA: 4.00, familyIncome: 5000000, isHasDisRecord: true, documentsComplete: false, Competition: 3},
    {name: "Abdul Muthar", GPA: 3.28, familyIncome:9300000, isHasDisRecord: false, documentsComplete: false, Competition: 3},
    {name: "Hina almahera", GPA: 3.76, familyIncome: 3700000, isHasDisRecord: true, documentsComplete: true, Competition: 4},
    {name: "Aksa raden P", GPA: 2.00, familyIncome: 3500000, isHasDIsRecord: false, documentsComplete: true, Competition: 1},
    {name: "Xiena alvonso", GPA: 3.00, familyIncome: 21150000, isHasDisRecord: false, documentsComplete: false, Competition: 2},
    {name: "Mahameru Abi", GPA: 3.12, familyIncome: 3200000, isHasDisRecord: true, documentsComplete: true, Competition: 3},
    {name: "Luca Modric", GPA: 1.32, familyIncome: 7000000, isHasDisRecord: false, documentsComplete: true, Competition: 2}
];

for (let i = 0; i < student.length; i++) {
    const passedFirstScreening = 
        student[i].GPA >= 3.75 &&
        student[i].familyIncome >= 5000000
    let result;
    
    if (passedFirstScreening) {
        const passedSecondScreening = 
            student[i].Competition >= 3 &&
            student[i].isHasDisRecord === false &&
            student[i].documentsComplete === true;
        if (!passedSecondScreening) {
            result = "Scholarship approved";
        } else {
            result = "Passed first screening, but failed in second screening"
        }
    } else {
        result = "Failed first screening";
    }
    console.log("Student name: ", student[i].name);
    console.log(result);
}