/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

function calculateTotalSales(sales: number[]): number {
let totalSales : number = 0;

for(let i = 0; i < sales.length; i++){
    totalSales += sales[i]
}
    return totalSales;
}

function findHighestTransaction(sales: number[]): number {
let highest : number = sales[0];

for(let i = 0; i < sales.length; i++){
    if(sales[i] > highest){
        highest = sales[i]
    }
}
    return highest;
}

function findLowestTransaction(sales: number[]): number {
let lowest : number = sales[0];

for(let i = 0; i < sales.length; i++){
    if(sales[i] < lowest){
        lowest = sales[i]
    }
}
    return lowest
}

function calculateAverageSale(sales: number[]): number {
return calculateTotalSales(sales) / sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
let count : number = 0;

for(let i = 0; i < sales.length; i++){
    if(sales[i] > minimumAmount){
        count++
    }
}
    return count;
}

function display(sales: number[]): void {
  console.log(`Total Sales: Rp${calculateTotalSales(sales)}`);
  console.log(`Highest: Rp${findHighestTransaction(sales)}`);
  console.log(`Lowest: Rp${findLowestTransaction(sales)}`);
  console.log(`Average: Rp${calculateAverageSale(sales)}`);
  console.log(`Large: ${countLargeTransactions(sales, 500000)} transactions`);
}

const dailyTransactions = [150000, 750000, 50000, 1200000, 450000];
display(dailyTransactions);