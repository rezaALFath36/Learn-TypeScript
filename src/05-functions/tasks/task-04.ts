/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];


function printAttendanceReport(list: typeof attendances): void{

let totalPresent : number = 0;
let totalAbsent : number = 0;
let absentNames : string[] = [];
let absentIndex : number = 0;

    for(let i = 0; i < list.length; i++){
        if(list[i].present){
            totalPresent++
        }
        else{
            totalAbsent++
            absentNames[absentIndex] = list[i].name
            absentIndex++
        }
    }
    console.log(`Total Present : ${totalPresent}`)
    console.log(`Total Absent : ${totalAbsent}`)
    console.log(`Names of absent student : ${absentNames}`)
}

printAttendanceReport(attendances)