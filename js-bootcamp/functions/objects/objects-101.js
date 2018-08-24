let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal'

console.log(`${myBook.title} by ${myBook.author}`)

//Challenge area

//name, age, location properties

//string based off of values of properties

//Bryan is 28 and lives in Boston

//Increase Age by 1 and print message again

let myInformation = {
    name: 'Bryan Butler',
    age: 28,
    location: 'Boston'
}

console.log(`${myInformation.name} is ${myInformation.age} and lives in ${myInformation.location}`)

myInformation.age = myInformation.age + 1;

console.log(`${myInformation.name} is ${myInformation.age} and lives in ${myInformation.location}`)