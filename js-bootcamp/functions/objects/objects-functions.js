let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary:`${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challenge Area
//Create function - take f in - return object with all three F, C, K

// let temperatures = {
//     fahrenheit: 64,
//     celsius: 18,
//     kelvin: 291
// }
let tempConversion = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) / 1.8,
        kelvin: ((fahrenheit - 32) / 1.8) + 273
    }
}

let tempCalculation = tempConversion(74)

console.log(tempCalculation)
// console.log(tempCalculation.fahrenheit)
// console.log(tempCalculation.celsius)
// console.log(tempCalculation.kelvin)
