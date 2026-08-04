/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

type roomInformation = {
    roomPricePerNight : number
    nightsStayed : number
    serviceCharged : number
    tax : number
    isVIP : boolean
}

let room1 : roomInformation = {
    roomPricePerNight : 650000,
    nightsStayed : 4,
    serviceCharged : 120000,
    tax : 0.11,
    isVIP : true
}

let isEligibleBreakfast : boolean =
room1.nightsStayed >= 3 ||
room1.isVIP === true;


let subtotal : number = room1.roomPricePerNight * room1.nightsStayed
let discountAmount : number = room1.isVIP === true ? subtotal * 0.12 : 0;
let totalAfterDiscount : number = subtotal - discountAmount

let taxAmount : number = subtotal * 0.11;

let finalPayment : number = (subtotal + taxAmount) - discountAmount;

console.log(`Subtotal : ${subtotal}`)
console.log(`Discount : ${discountAmount}`)
console.log(`Tax : ${taxAmount}`)
console.log(`Final payment : ${finalPayment}`)
console.log(`Is get free breakfast : ${isEligibleBreakfast}`)