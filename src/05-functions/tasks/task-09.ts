/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * -customer[]
 * - Total adcustomer[]
 * - Total disccustomer[]
 * - Numcustomer[] in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of adcustomer[]
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */const patients : customer[] = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

type customer = {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
}

function getTotalPatient (data: customer[]): number {
    return data.length;
}

function getAdmittedCount (data: customer[]): number {
    return data.filter(patient =>patient.admitted).length;
}

function getDischargedCount (data: customer[]): number {
    return data.filter(patient => !patient.admitted).length;
}

function getPatientByDepartment(data: customer[], department: string): number {
    return data.filter(patient => patient.department === department).length;
}

function getHighestBill (data: customer[]): number {
    return Math.max(...data.map (patient => patient.bill));
}

function getLowestBill(data: customer[]): number {
    return Math.min(...data.map (patient => patient.bill));
}

function getAverageBill(data: customer[]): number {
    const totalBill = data.reduce((total, patient) => total + patient.bill,0);
    return totalBill / data.length
}

function getTotalRevenue(data: customer[]): number {
    return data.reduce((total, patient) => total + patient.bill,0);
}

function getPatientName(data: customer[]): string[] {
    return data.filter(patient => patient.admitted).map(patient => patient.name);
}

function printHospitalReport (data: customer[]): void {
    console.log("Hospital Report");
    console.log("Total Patient: ",getTotalPatient(data));
    console.log("Total Admitted: ",getAdmittedCount(data));
    console.log("Total Discharge: ",getDischargedCount(data));
    console.log("Total Patient by Department Pediatrics: ",getPatientByDepartment(data, "Pediatrics"));
    console.log("Total Patient by Department Cardiology: ",getPatientByDepartment(data, "Cardiology"));
    console.log("Total Patient by Department Orthopedics: ",getPatientByDepartment(data, "Orthopedics"));
    console.log("Highest Bill: ",getHighestBill(data));
    console.log("Lowest Bill: ",getLowestBill(data));
    console.log("Average Bill: ",getAverageBill(data));
    console.log("Total Revenue: ",getTotalRevenue(data));
    console.log("Name of admitted patient: ",getPatientName(data));
}

printHospitalReport(patients);