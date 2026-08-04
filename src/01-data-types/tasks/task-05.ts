/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type attendanceRecord = {
    employeeId : String
    name : String
    date : String
    checkInTime : String
    checkOutTime : String
    TotalWorkingHours : Number
    isPresent : Boolean
}

let employee1 : attendanceRecord = {
    employeeId : `11223`,
    name : `Kurnia Bakery`,
    date : `10-7-2025`,
    checkInTime : `07.00`,
    checkOutTime : `15.15`,
    TotalWorkingHours : 8.25,
    isPresent : true
}

let employee2 : attendanceRecord = {
    employeeId : `11233`,
    name : `Cahaya Matahari`,
    date : `12-7-2025`,
    checkInTime : `07.30`,
    checkOutTime : `14.30`,
    TotalWorkingHours : 7,
    isPresent : true
}

let employee3 : attendanceRecord = {
    employeeId : `11223`,
    name : `Fahri Gaib`,
    date : ``,
    checkInTime : ``,
    checkOutTime : ``,
    TotalWorkingHours : 0,
    isPresent : false
}



console.log(`========== REGISTRATION RECORDS ==========`)
console.log(`----- FIRST EMPLOYEE -----`)
console.log(`ID : ${employee1.employeeId}`)
console.log(`Name : ${employee1.name}`)
console.log(`Date : ${employee1.date}`)
console.log(`Check In Time : ${employee1.checkInTime}`)
console.log(`Check Out Time : ${employee1.checkOutTime}`)
console.log(`Total Working Hours : ${employee1.TotalWorkingHours}` + ` Hours`)
console.log(`Present Today ? : ${employee1.isPresent}`)

console.log(`----- SECOND EMPLOYEE -----`)
console.log(`ID : ${employee2.employeeId}`)
console.log(`Name : ${employee2.name}`)
console.log(`Date : ${employee2.date}`)
console.log(`Check In Time : ${employee2.checkInTime}`)
console.log(`Check Out Time : ${employee2.checkOutTime}`)
console.log(`Total Working Hours : ${employee2.TotalWorkingHours}` + ` Hours`)
console.log(`Present Today ? : ${employee2.isPresent}`)

console.log(`----- THIRD EMPLOYEE -----`)
console.log(`ID : ${employee3.employeeId}`)
console.log(`Name : ${employee3.name}`)
console.log(`Date : ${employee3.date}`)
console.log(`Check In Time : ${employee3.checkInTime}`)
console.log(`Check Out Time : ${employee3.checkOutTime}`)
console.log(`Total Working Hours : ${employee3.TotalWorkingHours}` + ` Hours`)
console.log(`Present Today ? : ${employee3.isPresent}`)
