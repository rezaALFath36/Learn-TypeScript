/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */


const listPurchases : {product : string, price : number, quantity : number}[] = [
    {product : `Mechanical Keyboard`, price : 850000, quantity : 1},
    {product : `Wireless Mouse`, price : 275000, quantity : 2},
    {product : `Monitor Stand`, price : 420000, quantity : 1}
]

type customerInfo = {
    voucherValue : number
    isPremium : boolean
    rewardPointRate : number
}

let customer1 : customerInfo = {
    voucherValue : 100000,
    isPremium : true,
    rewardPointRate : 1
}

//SUBTOTAL
let subtotal : number = 
(listPurchases[0].price * listPurchases[0].quantity) +
(listPurchases[1].price * listPurchases[1].quantity) +
(listPurchases[2].price * listPurchases[2].quantity);

//MEMBERSHIP DISCOUNT
let premiumDiscountAmount : number = customer1.isPremium ? 0.1 : 0;
let discountedSubtotal : number = subtotal * (1 - premiumDiscountAmount);

//VOUCHER DEDUCTION
let voucherDeductionAmount : number = customer1.voucherValue

//PAYMENT BEFORE TAX
let finalPaymentBeforeTax : number = discountedSubtotal - voucherDeductionAmount;

//TAX
let TaxAmount : number = finalPaymentBeforeTax * 0.11;

//FINAL PAYMENT
let finalPayment : number = finalPaymentBeforeTax + TaxAmount;

//REWARD POINTS
let rewardPoint : number = (finalPaymentBeforeTax / 50000) * customer1.rewardPointRate;

//FREE SHIPPING ELIGIBILITY
let isFreeShiping : boolean =
customer1.isPremium || finalPaymentBeforeTax > 1500000;

console.log(`Product Subtotal : Rp${subtotal}`);
console.log(`Membership Discount :  ${premiumDiscountAmount}`);
console.log(`Voucher Deduction : Rp${voucherDeductionAmount}`);
console.log(`Payment Before Tax : Rp${finalPaymentBeforeTax}`);
console.log(`VAT (11%) : Rp${TaxAmount}`);
console.log(`Final Payment : Rp${finalPayment}`);
console.log(`Reward Points Earned : ${rewardPoint} Points`);
console.log(`Is Eligible Free Shipping? : ${isFreeShiping}`);