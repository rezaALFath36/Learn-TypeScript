/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

type product = {
    name : String
    price : number
    quantity : number
}

let product1 : product = {
    name : `Fried Rice`,
    price : 18000,
    quantity : 3
}
let product2 : product = {
    name : `Mineral Water`,
    price : 5000,
    quantity : 2
}

const discount : number = 10000;
const totalFoodPrice : number = product1.price * product1.quantity;
const totalDrinkPrice : number = product2.price * product2.quantity;
const grandTotal : number = totalFoodPrice + totalDrinkPrice;
const finalPayment : number = grandTotal - discount;

console.log(`Total Food Price (Fried Rice) : Rp${totalFoodPrice}`);
console.log(`Total Drink Price (Mineral Water) : Rp${totalDrinkPrice}`);
console.log(`Total Before Discount          : Rp${grandTotal}`);
console.log(`Final Payment                  : Rp${finalPayment}`);
