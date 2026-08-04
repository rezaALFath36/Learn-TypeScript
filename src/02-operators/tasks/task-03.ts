/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

type employee = {
    employeeName : string
    basicSalary : number
    overtimeHours : number
    overtimeRate : number
    isGetBonus : boolean
}

const employee1 : employee = {
    employeeName : `Dimas`,
    basicSalary : 5000000,
    overtimeHours : 12,
    overtimeRate : 50000,
    isGetBonus : true
}

let overtimePay : number = employee1.overtimeHours * employee1.overtimeRate;
const performanceBonus: number = employee1.overtimeHours > 10 ? 300000 : 0;
const finalSalary : number = employee1.basicSalary + overtimePay + performanceBonus;

console.log(`Employee Name  : ${employee1.employeeName}`);
console.log(`Overtime Pay   : Rp${overtimePay}`);
console.log(`Bonus          : Rp${performanceBonus}`);
console.log(`Final Salary   : Rp${finalSalary}`);

