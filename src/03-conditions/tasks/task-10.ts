/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

type StudentInform = {
    studentName : string
    isActiveStudent : boolean
    isTuitionPaid : boolean
    passedProgrammingFundamentals : boolean
    passedDatabaseSystem : boolean
    GPA : number
    isSeatsAvailable : boolean
}

let student1 : StudentInform = {
    studentName : `Nadia Putri`,
    isActiveStudent : true,
    isTuitionPaid : true,
    passedProgrammingFundamentals : true,
    passedDatabaseSystem : true,
    GPA : 3.45,
    isSeatsAvailable : false
}

let message : string;

if(student1.isActiveStudent && student1.isTuitionPaid){
    if(student1.passedProgrammingFundamentals &&
        student1.passedDatabaseSystem &&
        student1.GPA >= 3.20){

        if(!student1.isSeatsAvailable){
            message = `Registration Successful`
        }
        else{
            message = `Added to Waiting List`
        }
    }
    else{
        message = `Academic Requirements Not Met`
    }
}
else{
    message = `Registration Rejected`
}

console.log(`Student Name : ${student1.studentName} `)
console.log(`Active Student : ${student1.isActiveStudent}`)
console.log(`Tuition Paid : ${student1.isTuitionPaid}`)
console.log(`Passed Programming Fundamentals : ${student1.passedProgrammingFundamentals}`)
console.log(`Passed Database System : ${student1.passedDatabaseSystem}`)
console.log(`GPA : ${student1.GPA}`)
console.log(`Seats Available : ${student1.isSeatsAvailable}`)
console.log(`Message : ${message}`)