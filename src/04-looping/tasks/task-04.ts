/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales : number[] = [
 125000,
 350000,
 78000,
 910000,
 150000,
 420000,
 275000,
 99000,
 640000,
 18000
 ]

let totalRevenue: number = 0;
let minum: number = sales[0];
let max: number = sales[0];
let countAbove300k: number = 0;

for (let i = 0; i < sales.length; i++) {
  totalRevenue += sales[i];

  if (minum > sales[i]) {
    minum = sales[i];
  }

  if (max < sales[i]) {
    max = sales[i];
  }

  if (sales[i] >= 300000) {
    countAbove300k++;
  }
}

let averageValue: number = totalRevenue / sales.length;

console.log(`1. Total Revenue: Rp${totalRevenue.toLocaleString("id-ID")}`);
console.log(`2. Highest Transaction: Rp${max.toLocaleString("id-ID")}`);
console.log(`3. Lowest Transaction: Rp${minum.toLocaleString("id-ID")}`);
console.log(`4. Transactions >= Rp300.000: ${countAbove300k} transaksi`);
console.log(`5. Average Transaction: Rp${averageValue.toLocaleString("id-ID")}`);
