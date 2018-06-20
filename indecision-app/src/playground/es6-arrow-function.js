// function square(x) {
//     return x * x;
// };

// console.log(square(3));

// const squareArrow = (x) => {
// return x * x;
// };

// // exact same thing as above (no specify return)
// // const squareArrow = (x) => x * x;

// console.log(squareArrow(5));

//challenge - use arrow functions

//First way

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Bryan Butler'));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName('Bryan Butler'));

//Second way
const getFirstNameTwo = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Bryan Butler'));