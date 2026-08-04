/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

type applicantInfor = {
    applicant : string
    monthlyIncome : number
    creditScore : number
    existingDebt : number
    isPermanentEmployee : boolean
}

const applicant1 : applicantInfor = {
    applicant : `Andi Wijaya`,
    monthlyIncome : 10000000,
    creditScore : 725,
    existingDebt : 2500000,
    isPermanentEmployee : true
}

let loanDecision : string;

if(applicant1.monthlyIncome >= 8000000 && applicant1.creditScore >= 700){
    
    if(applicant1.existingDebt <= applicant1.monthlyIncome * 0.3){
        loanDecision = `Loan Approved`
    }
    else {
        loanDecision = `Manual Review`
    }
}
else{
    loanDecision = `Loan Rejected`
}

console.log(`Name : ${applicant1.applicant}`)
console.log(`Loan Decision : ${loanDecision}`)