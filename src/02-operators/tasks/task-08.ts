/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

type monitorInformation = {
    previousMeter : number
    currentMeter : number
    electricitypricePerKwh : number
    isSolarPanelInstalled : boolean
    energySavingModeEnabled : boolean
}

let monitor1 : monitorInformation = {
    previousMeter : 25640,
    currentMeter : 25892,
    electricitypricePerKwh : 1650,
    isSolarPanelInstalled : true,
    energySavingModeEnabled : false
}

let electricUsage : number = monitor1.currentMeter - monitor1.previousMeter;
let electricBill : number = electricUsage * monitor1.electricitypricePerKwh;

let isQualifies : boolean =
monitor1.isSolarPanelInstalled &&
electricUsage <= 300 &&
monitor1.energySavingModeEnabled;

let solarPanelDiscount : number = monitor1.isSolarPanelInstalled ? 0.2 : 0;
let additionalDiscount : number = monitor1.energySavingModeEnabled === true ? 0.05 : 0;
let totalDiscount : number = solarPanelDiscount + additionalDiscount;

let finalBill : number = electricBill * (1 - totalDiscount);

console.log(`Total Energy Consumption : ${electricUsage}`);
console.log(`Electricity Bill : ${electricBill}`);
console.log(`Final Bill : ${finalBill}`);
console.log(`Is Eligible Green Energy Program ? : ${isQualifies}`);
