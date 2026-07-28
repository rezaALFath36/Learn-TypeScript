/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type books = {
    bookNumber : String
    title : String
    author : String
    totalPages : Number
    category : String
    isAvailable : Boolean
}

const book1 : books = {
    bookNumber : `978-0-7432-7356-5`,
    title : `Coding JavaScript for Dummies`,
    author : `Oko Saputra`,
    totalPages : 120,
    category : `Education`,
    isAvailable : true
}
const book2 : books = {
    bookNumber : `978-979-29-5678-9`,
    title : `Mau Dibawa Kemana ini, Ayah?`,
    author : `Adi Suparman`,
    totalPages : 50,
    category : `Novel`,
    isAvailable : true
}
const book3 : books = {
    bookNumber : `978-602-03-1234-5`,
    title : `Kancil dan Kura-Kura`,
    author : `Joko Windows`,
    totalPages : 15,
    category : `Fable`,
    isAvailable : false
}

console.log(`========= COLLECTION 1 =========`)
console.log(`Name : ${book1.title}`)
console.log(`ISBN : ${book1.bookNumber}`)
console.log(`Total Pages : ${book1.totalPages}` + ` pages`)
console.log(`Category : ${book1.category}`)
console.log(`Author : ${book1.author}`)
console.log(`Available ? : ${book1.isAvailable}`)

console.log(`========= COLLECTION 2 =========`)
console.log(`Name : ${book2.title}`)
console.log(`ISBN : ${book2.bookNumber}`)
console.log(`Total Pages : ${book2.totalPages}` + ` pages`)
console.log(`Category : ${book2.category}`)
console.log(`Author : ${book2.author}`)
console.log(`Available ? : ${book2.isAvailable}`)

console.log(`========= COLLECTION 3 =========`)
console.log(`Name : ${book3.title}`)
console.log(`ISBN : ${book3.bookNumber}`)
console.log(`Total Pages : ${book3.totalPages}`+ ` pages`)
console.log(`Category : ${book3.category}`)
console.log(`Author : ${book3.author}`)
console.log(`Available ? : ${book3.isAvailable}`)
