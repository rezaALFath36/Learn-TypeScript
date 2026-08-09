/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submittedCount : number = 0;
let notSubmittedCount : number = 0;
let passedCount : number = 0;
let revisionCount : number = 0;
let totalScore : number = 0;

for (let i = 0; i < submissions.length; i++) {
    totalScore += submissions[i].score;

    if (submissions[i].submitted) {
        submittedCount++;

        if (submissions[i].score >= 75) {
            passedCount++;
        } else {
            revisionCount++;
            console.log(`Harus Revisi : ${submissions[i].student} (Nilai: ${submissions[i].score})`);
        }
    } else {
        notSubmittedCount++;
        console.log(`Tidak Mengumpulkan : ${submissions[i].student}`);
    }
}

let averageScore : number = totalScore / submissions.length;

console.log(`Siswa Mengumpulkan   : ${submittedCount}`);
console.log(`Siswa Tidak Kumpul   : ${notSubmittedCount}`);
console.log(`Siswa Lulus          : ${passedCount}`);
console.log(`Siswa Harus Revisi   : ${revisionCount}`);
console.log(`Rata-rata Kelas      : ${averageScore}`);