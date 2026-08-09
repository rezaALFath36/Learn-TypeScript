/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

import { SocketAddress } from "node:net";

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let outOfStock : number = 0;
let lowStock : number = 0;
let safeStock : number = 0;
let totalInventory : number = 0;
let averagequantity : number = 0;

for( let i = 0 ; i < stocks.length ; i++){
    if(stocks[i] = 0){
        outOfStock++
    }
    if(stocks[i] < 10){
        lowStock++
    }
    if(stocks[i] >= 10){
        safeStock++
    }
    totalInventory += stocks[i]
}

averagequantity = totalInventory / stocks.length

console.log(`Number of Out of stock product: ${outOfStock}`)
console.log(`Number of Low stock product: ${outOfStock}`)
console.log(`Number of Safe stock product: ${outOfStock}`)
console.log(`Total inventory: ${totalInventory}`)
console.log(`Average stock quantity: ${averagequantity}`)