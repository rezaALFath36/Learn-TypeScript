/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

interface listStudent{
  name: string
  major: string
  active: boolean
}

const students: listStudent[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

let totalStudent : number = 0;
let activeStudents : number = 0;
let inactiveStudents : number = 0;
let softwareEngineeringStudents : number = 0;
let networkingStudents : number = 0;
let multimedia : number = 0;


function countActiveStudents(list: listStudent[]): number{
  for(let i = 0; i < students.length; i++){
    if(students[i].active){
      activeStudents++
    }
  }
  return activeStudents
}

function countInactiveStudents(list : listStudent[]): number{
  for(let i = 0; i < students.length; i++){
    if(!students[i].active){
      inactiveStudents++
    }
  }
  return inactiveStudents
}

function countStudentsByMajor(list: listStudent[]){
  for(let i = 0; i < students.length; i++){
    if(students[i].major === "Software Engineering"){
      softwareEngineeringStudents++
    }
    else if(students[i].major === "Networking"){
      networkingStudents++
    }
    else if(students[i].major === "Multimedia"){
      multimedia++
    }
  }
  return {softwareEngineeringStudents, networkingStudents, multimedia};
}
function printEnrollmentReport(list: listStudent[]): void{
  const total = list.length;
  const activeStudents = countActiveStudents(list);
  const inactiveStudents = countInactiveStudents(list);
  const majorCounts = countStudentsByMajor(list);

  console.log("=== ENROLLMENT REPORT ===");
  console.log(`Total Students               : ${total}`);
  console.log(`Active Students              : ${activeStudents}`);
  console.log(`Inactive Students            : ${inactiveStudents}`);
  console.log("-------------------------");
  console.log(`Software Engineering Students: ${majorCounts.softwareEngineeringStudents}`);
  console.log(`Networking Students          : ${majorCounts.networkingStudents}`);
  console.log(`Multimedia Students          : ${majorCounts.multimedia}`);
}

printEnrollmentReport(students)