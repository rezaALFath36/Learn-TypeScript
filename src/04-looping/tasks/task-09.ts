/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let aStudents : number = 0;
let bStudents : number = 0;
let cStudents : number = 0;
let dStudents : number = 0;
let minum : number = students[0].score
let max : number = students[0].score
let totalScore : number = 0;

for(let i = 0; i < students.length; i++){
    if(students[i].score >= 90){
        aStudents++
    }
    else if(students[i].score >= 80){
        bStudents++
    }
    else if(students[i].score >= 70){
        cStudents++
    }
    else{
        dStudents++
    }

    if(minum > students[i].score){
        minum = students[i].score
    }
    if(max < students[i].score){
        max = students[i].score
    }
    totalScore += students[i].score
}

let averageScore : number = totalScore / students.length

console.log(`- Grade A Students : ${aStudents}`);
console.log(`- Grade B Students : ${bStudents}`);
console.log(`- Grade C Students : ${cStudents}`);
console.log(`- Grade D Students : ${dStudents}`);
console.log(`- Highest Score    : ${max}`);
console.log(`- Lowest Score     : ${minum}`);
console.log(`- Average Score    : ${averageScore}`);