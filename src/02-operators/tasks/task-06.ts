/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

let totalSpent : number = 455

let totalSpentMinutes: number = 455; 
const ratePerHour: number = 8000;

const remainingMinutes: number = totalSpentMinutes % 60;

const billedHours: number = Math.ceil(totalSpentMinutes / 60); 

const totalBeforeDiscount: number = billedHours * ratePerHour;

const discountAmount: number = totalSpentMinutes > 300 ? totalBeforeDiscount * 0.15 : 0;

const finalPayment: number = totalBeforeDiscount - discountAmount;

console.log(`Total Playing Time   : ${totalSpentMinutes} minutes`);
console.log(`Remaining Minutes    : ${remainingMinutes} minutes`);
console.log(`Total Billed Hours   : ${billedHours} hours`);
console.log(`Payment Before Discount : Rp${totalBeforeDiscount}`);
console.log(`Discount Amount      : Rp${discountAmount}`);
console.log(`Final Payment        : Rp${finalPayment}`);