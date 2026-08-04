/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

type StudentInform = {
    studentName : string
    GPA : number
    familyIncome : number
    competitionCount : number
    hasDisciplinaryRecord : boolean
    documentComplete : boolean
}

const student1 : StudentInform = {
    studentName : `Fajar Hidayat`,
    GPA : 3.86,
    familyIncome : 4200000,
    competitionCount : 4,
    hasDisciplinaryRecord : false,
    documentComplete : true
}

console.log(`Name : ${student1.studentName}`)

if (student1.GPA >= 3.75 && student1.familyIncome < 5000000) {
    if (
        student1.competitionCount >= 3 &&
        student1.hasDisciplinaryRecord === false &&
        student1.documentComplete
    ) {
        console.log("Scholarship Approved");
    } else {
        console.log("Passed First Screening, but Failed Second Screening");
    }

} else {
    console.log("Failed First Screening");
}

