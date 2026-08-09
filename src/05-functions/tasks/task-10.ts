/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function countTotalEnrollment(list: typeof enrollments): number{
    return list.length;
}

function countCompletedEnrollments(list: typeof enrollments): number{
    let totalCompleted : number = 0;
    for(let i = 0; i < list.length; i++){
        if(list[i].completed){
            totalCompleted++
        }
    }
    return totalCompleted;
}

function countIncompleteEnrollments(list: typeof enrollments): number {
    return countTotalEnrollment(list) - countCompletedEnrollments(list);
}

function countCompletionPercentage(list: typeof enrollments): number{
    let completePercentage : number = 0;
    completePercentage = (countCompletedEnrollments(list) / countTotalEnrollment(list)) * 100

    return completePercentage;
}

function countHighestScore(list: typeof enrollments): number{
    let highestScore = list[0].score
    for(let i = 0; i < list.length; i++){
        if(list[i].score > highestScore){
            highestScore = list[i].score
        }
    }
    return highestScore
}

function countLowestScore(list: typeof enrollments): number{
    let lowestScore = list[0].score
    for(let i = 0; i < list.length; i++){
        if(list[i].score < lowestScore){
            lowestScore = list[i].score
        }
    }
    return lowestScore
}

function countAverageScore(list: typeof enrollments): number{
    let totalScore : number = 0;
    for(let i = 0; i < list.length; i++){
        totalScore += list[i].score
    }
    return totalScore / countTotalEnrollment(list);
}

function countPassedStudents(list: typeof enrollments): number{
    let totalPassed : number = 0;
    for(let i = 0; i < list.length; i++){
        if(list[i].score >= 75){
            totalPassed++
        }
    }
    return totalPassed;
}

function countEachCourse(list: typeof enrollments){
    let totalTypescript : number = 0;
    let totalBackend : number = 0;
    let totalDatabase : number = 0;

    for(let i = 0; i < list.length; i++){
        if(list[i].course === "TypeScript"){
            totalTypescript++
        }
        else if(list[i].course === "Backend"){
            totalBackend++
        }
        else if(list[i].course === "Database"){
            totalDatabase++
        }
    }
    return{totalTypescript, totalBackend, totalDatabase}
    
}

function countAverageScoreByCourse(list: typeof enrollments, courseName: string): number {
    let totalScore = 0;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].course === courseName) {
            totalScore += list[i].score;
            count++;
        }
    }
    return totalScore / count;
}

function countTotalLearningHours(list: typeof enrollments): number {
    let totalHours = 0;
    for (let i = 0; i < list.length; i++) {
        totalHours += list[i].duration;
    }
    return totalHours;
}

function countAverageLearningDuration(list: typeof enrollments): number {
    return countTotalLearningHours(list) / countTotalEnrollment(list);
}

function printSummaryStats(list: typeof enrollments): void {
    console.log(`=== COMPLETION STATISTICS ===`);
    console.log(`Total Enrollments      : ${countTotalEnrollment(list)}`);
    console.log(`Completed Enrollments  : ${countCompletedEnrollments(list)}`);
    console.log(`Incomplete Enrollments : ${countIncompleteEnrollments(list)}`);
    console.log(`Completion Percentage  : ${countCompletionPercentage(list)}`);

    console.log(`=== ACADEMIC STATISTICS ===`);
    console.log(`Highest Score          : ${countHighestScore(list)}`);
    console.log(`Lowest Score           : ${countLowestScore(list)}`);
    console.log(`Average Score          : ${countAverageScore(list)}`);
    console.log(`Passed Students (>=75) : ${countPassedStudents(list)}`);
}

function printMainDashboard(list: typeof enrollments): void {
    const courses = countEachCourse(list);

    console.log(`=========================================`);
    console.log(`       ACADEMY PERFORMANCE DASHBOARD     `);
    console.log(`=========================================\n`);

    printSummaryStats(list);

    console.log(`=== COURSE STATISTICS ===`);
    console.log(`TypeScript : ${courses.totalTypescript} students | Avg Score: ${countAverageScoreByCourse(list, "TypeScript")}`);
    console.log(`Backend    : ${courses.totalBackend} students | Avg Score: ${countAverageScoreByCourse(list, "Backend")}`);
    console.log(`Database   : ${courses.totalDatabase} students | Avg Score: ${countAverageScoreByCourse(list, "Database")}`);

    console.log(`=== LEARNING STATISTICS ===`);
    console.log(`Total Learning Hours   : ${countTotalLearningHours(list)} hrs`);
    console.log(`Avg Learning Duration  : ${countAverageLearningDuration(list)} hrs/student`);
    console.log(`=========================================`);
}

printMainDashboard(enrollments);