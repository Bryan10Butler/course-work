// //function declaration
// function walk() {
//     console.log('walk');
// }

// //function expression
// let run = function() {
//     console.log('run');
// };

// let move = run;
// run();
// walk();
// move();
// function sum(discount, ...prices) {

// const total = prices.reduce((a, b) => a + b);
// return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30, 1));
// function interest(principal, rate = 3.5, years = 5) {
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000, 3.5, 5));

// getter and setter
// const person = {
//     firstName: 'Bryan',
//     lastName: 'Butler',
//     get fullName() {
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value) {
//         if(typeof value !== 'string')
//             throw new Error('Value is not a string.');

//         const parts = value.split(' ');
//         if (parts.length !==2)
//         throw new Error('Enter a first and last name')
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };
// try {
// person.fullName = '';
// }
// catch (e) {
//     alert(e)
// }
// console.log(person);

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function playVideo() {
    console.log(this);
};

VideoPlaybackQuality
// video.stop = function() {
//     console.log(this);
// };

// video.stop();


