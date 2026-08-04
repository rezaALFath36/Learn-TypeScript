/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const listshop : {product : string, price : number, quantity : number}[] = [
    {product : `Mechanical Keyboard`, price : 850000, quantity : 1},
    {product : `Wireless Mouse`, price : 275000, quantity : 2},
    {product : `Mouse Pad`, price : 120000, quantity : 1}
]

let subtotal : number = 
 (listshop[0].price * listshop[0].quantity) +
 (listshop[1].price * listshop[1].quantity) +
 (listshop[2].price * listshop[2].quantity);

let isDiscountApplied : boolean = subtotal > 1000000;
let totalDiscount : number = subtotal > 1000000 ? subtotal * 0.1 : 0;
let finalPayment = subtotal - totalDiscount;

const isPremium : boolean = true;

let totalItems: number = 0;
for (let i = 0; i < listshop.length; i++) {
    totalItems += listshop[i].quantity;
}

console.log(`Total Items Purchased : ${totalItems}`);
console.log(`Subtotal              : Rp${subtotal}`);
console.log(`Discount Applied      : Rp${totalDiscount}`);
console.log(`Final Payment         : Rp${finalPayment}`);