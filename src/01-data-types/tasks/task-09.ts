/**
 * A programming bootcamp stores information about every participant who registers for the Backend Development class. 
 * Since many students register for the same course, the system stores the participant data as a collection instead of creating separate variables.
 * Today, three students registered for the course.
| Student ID | Name           | Age | Has Paid |
| ---------- | -------------- | --- | -------- |
| ST001      | Ahmad Fauzi    | 16  | Yes      |
| ST002      | Siti Nurhaliza | 17  | No       |
| ST003      | Budi Santoso   | 16  | Yes      |


 * Task:
 * 1. Define a proper type for the participant information.
 * 2. Store the participant data in a single collection.
 * 3. Display the participant data using console.log.
 */

let participant : {studentId : String, name : String, age : Number, hasPaid : Boolean}[] = [
    {studentId : `12345`, name : `Ahmad Fauzi`, age : 16, hasPaid : true},
    {studentId : `54321`, name : `Siti Nurhaliza`, age : 17, hasPaid : false},
    {studentId : `12345`, name : `Budi Santoso`, age : 16, hasPaid : true}
]

console.log(`| Student ID | Name           | Age | Has Paid |`)
console.log(participant[0].studentId, participant[0].name, participant[0].age, participant[0].hasPaid)
console.log(participant[0].studentId, participant[1].name, participant[1].age, participant[1].hasPaid)
console.log(participant[0].studentId, participant[2].name, participant[2].age, participant[2].hasPaid)