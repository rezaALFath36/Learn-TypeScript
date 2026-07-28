/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */


type customer = {
    premium : Boolean
    freeShipping : Boolean
}

type productInformation = {
    product : String
    productCode : String
    originalPrice : String
    stock : String
    isAvailable: Boolean
    flashSale: {
        discount : Number
    }
}

let customer1 : customer = {
    premium : true,
    freeShipping : true
}
let product1 :  productInformation = {
    product : `Mechanical Keyboard RGB`,
    productCode : `KBR-001`,
    originalPrice : ` 850000`,
    isAvailable: true,
    stock : `18`,
    flashSale: {
         discount : 0.25
    }
}

console.log(`========== PURCHASED PAPER ==========`)
console.log(`Name: ${product1.product}`)
console.log(`Code: ${product1.productCode}`)
console.log(`Price: ${product1.originalPrice}` + ` Rupiahs`)
console.log(`Available: ${product1.isAvailable}`)
console.log(`Stock: ${product1.stock}`)
console.log(`Bonus: ${product1.flashSale.discount}`)
console.log(`Premium Customer: ${customer1.premium}`)
console.log(`Free Shipping Bonus: ${customer1.freeShipping}`)