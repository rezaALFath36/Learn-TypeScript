/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type register = {
    studentID : String
    fullName : String
    gradeLevel : String
    selectedCourse : {
        courseId : String
        courseTitle : String
        instructorName : String
        learningHours : Number
    }
    registStatus : {
        date : String
        isPayed : Boolean
    }
}

const registration1: register = {
    studentID: `STD-2026-001`,
    fullName: `Rian Ardianto`,
    gradeLevel: `Beginner`,
    selectedCourse: {
        courseId: `CS-101`,
        courseTitle: `Pengenalan Pemrograman Python`,
        instructorName: `Siti Aminah, M.T.`,
        learningHours: 45
    },
    registStatus: {
        date: `2026-07-15`,
        isPayed: true
    }
};

const registration2: register = {
    studentID: `STD-2026-042`,
    fullName: `Clarissa Utama`,
    gradeLevel: `Intermediate`,
    selectedCourse: {
        courseId: `JS-202`,
        courseTitle: `Asynchronous JavaScript & TypeScript`,
        instructorName: `Alex Hanson`,
        learningHours: 60
    },
    registStatus: {
        date: `2026-07-20`,
        isPayed: false
    }
};

const registration3: register = {
    studentID: `STD-2026-109`,
    fullName: `Budi Setiawan`,
    gradeLevel: `Advanced`,
    selectedCourse: {
        courseId: `GO-301`,
        courseTitle: `Membangun Microservices dengan Go`,
        instructorName: `Eko Kurniawan`,
        learningHours: 80
    },
    registStatus: {
        date: `2026-07-27`,
        isPayed: true
    }
};

// 3. Menampilkan data menggunakan console.log
console.log(`--- Data Registrasi 1 ---`);
console.log(registration1);

console.log(`--- Data Registrasi 2 ---`);
console.log(registration2);

console.log(`--- Data Registrasi 3 ---`);
console.log(registration3);