/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

type information = {
    name : string
    GPA : number
    familyIncome : number
    competitionCount : number
    hasDisciplinaryRecord : boolean
    isDocumentComplete : boolean
}

let student : information = {
    name : `Alya Putri`,
    GPA : 3.89,
    familyIncome : 6000000,
    competitionCount : 4,
    hasDisciplinaryRecord : false,
    isDocumentComplete : false
}

let isReceive : boolean = 
student.GPA >= 3.75 &&
student.competitionCount >= 3 &&
student.hasDisciplinaryRecord === false &&
student.isDocumentComplete === true; 

let scholarshipAmount: number = isReceive 
    ? (student.familyIncome < 5000000 ? 12000000 : 6000000) : 0;

const scholarshipBudget : number = 500000000;
let remainingBudget : number = scholarshipBudget - scholarshipAmount;

console.log(`Student Name      : ${student.name}`);
console.log(`Is Accepted       : ${isReceive}`);
console.log(`Scholarship Award : Rp${scholarshipAmount}`);
console.log(`Remaining Budget  : Rp${remainingBudget}`); 

// family income more than 5 million, scholarship amount half
// but if documentcompleted false, it shouldn't get scolarship


