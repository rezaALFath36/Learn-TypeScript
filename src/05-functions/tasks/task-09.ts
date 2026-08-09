/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
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
 */
interface Patient {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
}

const patients : Patient[] = [
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

function countTotalPatients(list: Patient[]): number{
    return list.length
}

function countAdmittedPatients(list: Patient[]): number{
    let admittedPatient : number = 0;
    for(let i = 0; i < list.length; i++){
        if(list[i].admitted){
            admittedPatient++
        }
    }
    return admittedPatient
}

function countDischargedPatients(list: Patient[]): number{
    let dischargedPatient : number = 0;
    for(let i = 0; i < list.length; i++){
        if(!list[i].admitted){
            dischargedPatient++
        }
    }
    return dischargedPatient
}

function countNumberPatients(list: Patient[]){
    let pediatricsDepart : number = 0;
    let cardiologyDepart : number = 0;
    let orthopedicsDepart : number = 0;
    for(let i = 0; i < list.length; i++){
        if(list[i].department === "Pediatrics"){
            pediatricsDepart++
        }
        else if(list[i].department === "Cardiology"){
            cardiologyDepart++
        }
        else if(list[i].department === "Orthopedics"){
            orthopedicsDepart++
        }
    }
    return{pediatricsDepart, cardiologyDepart, orthopedicsDepart};
    
}

function countHighestBill(list: Patient[]): number{
    let highestBill = list[0].bill;
    for(let i = 0; i < list.length; i++){
        if(list[i].bill > highestBill){
            highestBill = list[i].bill;
        }
    }
    return highestBill;
}

function countLowestBill(list: Patient[]): number{
    let lowestBill = list[0].bill;
    for(let i = 0; i < list.length; i++){
        if(list[i].bill < lowestBill){
            lowestBill = list[i].bill;
        }
    }
    return lowestBill
}

function countTotalRevenue(list: Patient[]): number{
    let total = 0;
    for(let i = 0; i < list.length; i++){
        total += list[i].bill;
    }
    return total;
}

function countAverageBill(list: Patient[]){
    let average : number = 0;
    average = countTotalRevenue(list) / list.length
    return average
}

function getAdmittedPatientNames(list: Patient[]){
    let patientNames : string[] = []
    for(let i = 0; i < list.length; i++){
        if(list[i].admitted){
        patientNames[patientNames.length] = list[i].name
        }
    return patientNames
    }
}

function printHospitalReport(list: Patient[]): void {
    const depts = countNumberPatients(list);

    console.log(`=== HOSPITAL DAILY REPORT ===`);
    console.log(`Total Patients         : ${countTotalPatients(list)}`);
    console.log(`Admitted Patients      : ${countAdmittedPatients(list)}`);
    console.log(`Discharged Patients    : ${countDischargedPatients(list)}`);
    console.log(`Patients per Dept      : Pediatrics (${depts.pediatricsDepart}), Cardiology (${depts.cardiologyDepart}), Orthopedics (${depts.orthopedicsDepart})`);
    console.log(`Highest Bill           : Rp ${countHighestBill(list)}`);
    console.log(`Lowest Bill            : Rp ${countLowestBill(list)}`);
    console.log(`Average Bill           : Rp ${countAverageBill(list)}`);
    console.log(`Total Revenue          : Rp ${countTotalRevenue(list)}`);
    console.log(`Admitted Patient Names : ${getAdmittedPatientNames(list)}`);
    console.log(`=============================`);
}

printHospitalReport(patients)