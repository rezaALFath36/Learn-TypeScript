/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

function findHighestScore(scores: number[]): number {
let highest : number = scores[0]

for(let i = 0; i < scores.length; i++){
    if(scores[i] > highest){
        highest = scores[i];
    }
}
    return highest
}

function findLowestScore(scores: number[]): number {
let lowest : number = scores[0]

for(let i = 0; i < scores.length; i++){
    if(scores[i] < lowest){
        lowest = scores[i];
    }
}
    return lowest;
}

function calculateAverage(scores: number[]): number {
let totalScore : number = 0

for(let i = 0; i < scores.length; i++){
    totalScore += scores[i]
}
    return totalScore / scores.length
}

function countPassedStudents(scores: number[]): number {
let passingStudents : number = 0

for(let i = 0; i < scores.length; i++){
    if(scores[i] >= 75){
        passingStudents++
    }
}
    return passingStudents;
}

function printScoreReport(scores: number[]): void {
    console.log("=== BACKEND DEVELOPMENT SCORE REPORT ===");
    console.log(`Highest Score  : ${findHighestScore(scores)}`);
    console.log(`Lowest Score   : ${findLowestScore(scores)}`);
    console.log(`Average Score  : ${calculateAverage(scores)}`);
    console.log(`Passed Students: ${countPassedStudents(scores)}`);
}

const scoresData = [80, 65, 90, 75, 50, 88, 72];
printScoreReport(scoresData);