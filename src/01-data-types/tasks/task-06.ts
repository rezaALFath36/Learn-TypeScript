/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type productInformation = {
    productCode : String
    productName : String
    sellingPrice : Number
    stockQuantity : Number
    weight : Number
    customerRating : Number
    isDiscount : Boolean
}

let product1 : productInformation = {
    productCode : `18990`,
    productName : `Headphone Nemesis KH-110`,
    sellingPrice : 350000,
    stockQuantity : 12,
    weight : 0.75,
    customerRating : 4.5,
    isDiscount : false
}
let product2 : productInformation = {
    productCode : `19010`,
    productName : `USB type-C charging cable`,
    sellingPrice : 45000,
    stockQuantity : 20,
    weight : 0.2,
    customerRating : 3,
    isDiscount : true
}
let product3 : productInformation = {
    productCode : `10045`,
    productName : `Cooling pad CD-90`,
    sellingPrice : 200000,
    stockQuantity : 9,
    weight : 1.2,
    customerRating : 5,
    isDiscount : false
}

console.log(`========== PRODUCT INFORMATION 1 ==========`)
console.log(`Product Code : ${product1.productCode}`)
console.log(`Product Name : ${product1.productName}`)
console.log(`Price : ${product1.sellingPrice}`)
console.log(`Stock : ${product1.stockQuantity}`)
console.log(`Weight : ${product1.weight}` + ` KG`)
console.log(`Rating : ${product1.productCode}` + ` Stars`)
console.log(`Discount ? : ${product1.isDiscount}`)