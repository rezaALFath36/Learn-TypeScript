/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

type studentInformation = {
    finalScore : number
    attendance : number
    isTuitionPay : boolean
}

const student : studentInformation = {
    finalScore : 82,
    attendance : 94,
    isTuitionPay : true
}

const isEligible: boolean = 
    student.finalScore >= 75 && 
    student.attendance >= 90 && 
    student.isTuitionPay;

console.log(`Final Score  : ${student.finalScore}`);
console.log(`Attendance   : ${student.attendance}%`);
console.log(`Tuition Paid : ${student.isTuitionPay ? "Yes" : "No"}`);
console.log(`Is Student Eligible for Graduation? ${isEligible}`);


