/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

interface listSubmission{
    student : string
    submitted : boolean
    score : number
}

const submissions : listSubmission[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

// 1. Fungsi Total Siswa
function countTotalStudents(list: listSubmission[]): number {
    return list.length;
}

// 2. Fungsi Siswa Mengumpulkan
function countSubmittedStudent(list: listSubmission[]): number {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].submitted) {
            count++;
        }
    }
    return count;
}

// 3. Fungsi Tugas Belum Dikumpulkan
function countMissingAssignments(list: listSubmission[]): number {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (!list[i].submitted) {
            count++;
        }
    }
    return count;
}

// 4. Fungsi Siswa Lulus (Score >= 75)
function countPassedStudents(list: listSubmission[]): number {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].score >= 75) {
            count++;
        }
    }
    return count;
}

// 5. Fungsi Siswa Butuh Revisi (Sudah mengumpulkan & score < 75)
function countRevisionStudents(list: listSubmission[]): number {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].submitted && list[i].score < 75) {
            count++;
        }
    }
    return count;
}

// 6. Fungsi Rata-Rata Nilai
function countAverageScore(list: listSubmission[]): number {
    if (list.length === 0) return 0;
    let totalScore = 0;
    for (let i = 0; i < list.length; i++) {
        totalScore += list[i].score;
    }
    return totalScore / list.length;
}

// 7. Fungsi Nilai Tertinggi
function countHighestScore(list: listSubmission[]): number {
    if (list.length === 0) return 0;
    let max = list[0].score;
    for (let i = 1; i < list.length; i++) {
        if (list[i].score > max) {
            max = list[i].score;
        }
    }
    return max;
}

// 8. Fungsi Nilai Terendah
function countLowestScore(list: listSubmission[]): number {
    if (list.length === 0) return 0;
    let min = list[0].score;
    for (let i = 1; i < list.length; i++) {
        if (list[i].score < min) {
            min = list[i].score;
        }
    }
    return min;
}

// Void function untuk menampilkan laporan
function displayBoard(list: listSubmission[]): void {
    const total = countTotalStudents(list);
    const submit = countSubmittedStudent(list);
    const missing = countMissingAssignments(list);
    const passed = countPassedStudents(list);
    const revision = countRevisionStudents(list);
    const average = countAverageScore(list);
    const highest = countHighestScore(list);
    const lowest = countLowestScore(list);

    console.log(`=== REPORT ===`);
    console.log(`Total Students         : ${total}`);
    console.log(`Submitted Students     : ${submit}`);
    console.log(`Missing Assignments    : ${missing}`);
    console.log(`Passed Students        : ${passed}`);
    console.log(`Need Revision Students : ${revision}`);
    console.log(`Average Score          : ${average.toFixed(2)}`);
    console.log(`Highest Score          : ${highest}`);
    console.log(`Lowest Score           : ${lowest}`);
}

displayBoard(submissions);