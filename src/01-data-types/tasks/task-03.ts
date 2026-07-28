/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type studentRecord = {
    fullName : String
    StudentId : String
    age : Number
    isActiveStudent : Boolean
}

const student1 : studentRecord = {
    fullName : 'Kenzie Al Fath Fadhilah',
    StudentId : `52445`,
    age : 16,
    isActiveStudent : true
}

const student2 : studentRecord = {
    fullName : 'Arif Nugroho',
    StudentId : `524225`,
    age : 17,
    isActiveStudent : false
}

const student3 : studentRecord = {
    fullName : 'I Made Saputra',
    StudentId : `4245225`,
    age : 15,
    isActiveStudent : true
}

console.log(`========== FIRST STUDENT ==========`)
console.log(`Full Name : ${student3.fullName}`)
console.log(`ID Student : ${student3.StudentId}`)
console.log(`Age : ${student3.age}` + ` years old`)
console.log(`Active Student ? : ${student3.isActiveStudent}`)

console.log(`========== SECOND STUDENT ==========`)
console.log(`Full Name : ${student2.fullName}`)
console.log(`ID Student : ${student2.StudentId}`)
console.log(`Age : ${student2.age}` + ` years old`)
console.log(`Active Student ? : ${student2.isActiveStudent}`)

console.log(`========== THIRD STUDENT ==========`)
console.log(`Full Name : ${student1.fullName}`)
console.log(`ID Student : ${student1.StudentId}`)
console.log(`Age : ${student1.age}` + ` years old`)
console.log(`Active Student ? : ${student1.isActiveStudent}`)