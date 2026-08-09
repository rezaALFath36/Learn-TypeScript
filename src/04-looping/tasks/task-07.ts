/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentStudents : number = 0;
let absentStudents : number = 0;
let attendancePersentage : number;

for(let i = 0 ; i < attendances.length ; i++){
  if(attendances[i].present === true){
    presentStudents++
  }
  if(attendances[i].present === false){
    absentStudents++
   console.log(`name student absent : ${attendances[i].name} `)
  }
}

attendancePersentage = (presentStudents / attendances.length) * 100

console.log(`Present Students      : ${presentStudents}`);
console.log(`Absent Students       : ${absentStudents}`);
console.log(`Attendance Percentage : ${attendancePersentage}%`);