//Primitive Types
// let name = 'Mosh'; //String Literal
// let age = 30; //Number Literal
// let isApproved = true; //Boolean Literal
// let firstName = undefined;
// let selectedColer = null; //clear the value of the variable

//Reference Types
//Object with Key Value pair
// let person = {
//     name: 'Mosh',
//     age: 30
// };

//Dot Notation
// console.log(person.name);

//Bracket Notation
// person ['name'] = 'Mary';

//array
//empty array
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);


//funcitons
//name is parameter and input to this function
//Performing a task
// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }
// greet('John', 'Smith');
// greet('Mary');

//calculates a value
// function square(number) {
//     return number * number;
// }

// console.log(square(2));

//arithmetic operators

// let x = 10;
// let y = 3;

//console.log(x+y);
//console.log(x-y);
//console.log(x*y);
//console.log(x/y);
//modulus
//console.log(x%y);
//x to the power of y
//console.log(x**y);
//console.log(x++);
//console.log(x);
//console.log(--x);
// console.log(x<=10);
// let points = 110;
//ternary or condition 
//if points is greater than 100 then gold, but false silver
// let type = points > 100 ? 'gold' : 'silver';


//logical AND (&&)
//returns true if both operands are TRUE
//console.log(true && true);
// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);

//as long as one evaluates to true
// let highIncome = false;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log('Eligible', eligibleForLoan);

//not
// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);

//logical operator with non boolean
//falsy (false)
//undefined
//null
//0
//false
//''
//NaN
//Anything that is not Falsy -> Truthy

// let userColor = undefined;
// let defaultColor = 'blue';
//user color or default color
//if we have a usercolor select that, but if not use default
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// let x = 2 + 3 * 4;

// console.log(x);
// let a = 'red';
// let b = 'blue';

//red
// let c = a;

// a = b;

// b = c;

// console.log(a);
// console.log(b);

//Hour
//If hour is between 6Am and 12:PM good morning
//if hour is between 12:pm and 6:pm good afternoon
//otherwise good evening
// let hour = 20;

// if (hour >= 6 && hour < 12) {
//     console.log('Good Morning!');
// }
// else if (hour >= 12 && hour < 18 ) {
//     console.log('Good Afternoon!');
// }
// else 
// console.log('Good Evening!');
// let role = 'guest';
// switch (role) {
//     case 'guest':
//     console.log('Guest User');
//     break;

//     case 'moderator':
//     console.log('Moderator User');
//     break;

//     default:
//     console.log('Unknown User');
// }
// for (let i = 0; i <= 5; i++) {
//     if (i % 2 !==0)
//     console.log(i)
// }

// let i = 0;
// while (i<=5) {
//     if (i % 2 !==0) console.log(i);
//     i++;
// }

//do-while
// let i = 0;
// do {
//     if (i % 2 !==0) console.log(i);
//     i++;
// } while (i <= 5);
// const person = {
//     name: 'Bryan',
//     age: 27
// };
// for (let key in person)
// console.log(key, person[key]);

// const colors = ['Red', 'Green', 'Blue'];

// for (let color of colors)
// console.log(color);

//Exercise
//Write a funciton for two numbers that returns the maximum of the two
// function maxNumber(num1, num2) {
//     (num1 > num2) ? console.log(num1) : console.log(num2);
// }
// maxNumber(10, 10)

//Exercise
//Return true if width is greater than height
//otherwise false
// function isLandscape(width, height) {
//     console.log((width > height)); 
// }

// isLandscape(20, 30);

//Exercise
//FizzBuzz

//if number is divisible by 3 Fizz
//if number is divisible by 5 Buzz
//if number is divisible by 3 and 5 FizzBuzz
//not divisible by 3 or 5 get same input
//not a number 'not a number'
// const output = fizzBuzz(15);
// console.log(output)

// function fizzBuzz(input) {
    
//     if (typeof input !== 'number')
//     return NaN;

//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'FizzBuzz';

//     if (input % 3 === 0)
//         return 'Fizz';

//     if (input % 5 === 0)
//         return 'Buzz';

//     return input;
// }

// Speed Limit = 70
//70 and under - ok
//every 5 kilo above speed limit give driver 1 pt
//Math.floor(1.3)
//if driver more than 12 pts than license suspended

// checkSpeed(76.6)

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint) {
//         console.log('Ok');
//         return;
//     }

//     const points = Math.floor((speed - speedLimit) / kmPerPoint);

//     if (points >= 12)
//         console.log('License suspended');
//     else
//         console.log('Points', points);
// }

// showNumbers(10);

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i ++) {
//         let oddOrEven = (i % 2 === 0) ? i + ' Even' : i + ' Odd'
//         console.log(oddOrEven);

        // if (limit % 2 === 0) {
        //     console.log(limit + ' Even')
        // }
        // if (!(limit % 2 ===0)) {
        //     console.log(limit + ' Odd')
        // }
//     }
// }

// const isActive = true;
// const name = 'Bryan'; //Truthy non boolean
// const nameTwo = ''; //Falsy non boolean

//Falsy values in JavaScript
//Falsy
//undefined
//null
//''
//false
//0
//NaN

// if (nameTwo) console.log('Hello');

// const array = [0, null, undefined, '', 2, 3];

// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array)
//         if (value)
//             count++
//     return count;
// }

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'string')
//         console.log(key, obj[key]);
        
//     }
// }

// console.log(sum(10));

// //multiples of 3: 3, 6, 9
// //multiples of 5: 5, 10

// function sum(limit) {
//     let sum = 0;
//     for (let i = 0; i <= limit; i++) 
//         if (i % 3 === 0 || i % 5 === 0) 
//             sum += i;
//             return sum:
// }

//average 70

//1-59 F
//60-60 D
//70-79 C
//80-89 B
//90-100 A

// const array = [100, 100, 60];

// function calculateGrade(marks) {
//     const average = calculateAverage(marks)
//     //calculate grade
//     if (average < 60) return 'F'
//     if (average < 70) return 'D'
//     if (average < 80) return 'C'
//     if (average < 90) return 'B'
//     return 'A'
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let mark of array)
//     //sum    
//     sum += mark;
//     //average
//     return sum / array.length
// }

// console.log(calculateGrade(array));

// showStars(5);
//  function showStars(rows) {
//      for (let row = 1; row <= rows; row++) {
//         let pattern = '';
//         for(let i = 0; i < row; i++) 
//             pattern += '*';
//             console.log(pattern)
//      }
//  }

//Prime (whose factors are only 1 and itself)
//Composite

//12 = 1, 2, 3, 4, 6, 12
//Can be divided evenly by it's factors

//11 = 1 and 11
//13 = 1 and 13

// showPrimes(20);

// function showPrimes(limit) {
//     for (let number = 2;  number <= limit; number++) {

//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++) {
//             if (number % factor === 0){
//             isPrime = false;
//             break;
//             }
//         }
//         if (isPrime) console.log(number);
//     }
// }

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); //method
