// //Factory Function
// function createCircle(radius) {
//     return {
//         radius,

//         draw() {
//             console.log('draw');
//         }
//     }
// };

// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// //Constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new circle1(1)

// // dynamic nature of objects
// // Cannot reassign const, but can add properties to the circle object
// const circle = {
//     radius: 1
// }

// circle.color = 'yellow';
// circle.draw = function(){}

// delete circle.color;
// delete circle.draw;

// console.log(circle);

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw');
//     }
// };

// for (let key in circle)
// console.log(key, circle[key])

// for (let key of Object.keys(circle))
// console.log(key)

// for(let entry of Object.entries(circle))
// console.log(entry)

// if ('color' in circle) console.log('yes');

// const myAddress = createAddress('a', 'b', 'c');

// console.log(myAddress)

//standard function
// function showAddress(address) {
//     for (let key in myAddress) {
//         console.log(key, myAddress[key])
//     };
// };

// showAddress(myAddress);

//factory function
// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     }
// }


//constructor
// function createAddress(street, city, zipcode) {
//     this.street = street,
//         this.city = city,
//         this.zipcode = zipcode
// }

// let address1 = new createAddress('a', 'b', 'c');
// let address2 = new createAddress('a', 'b', 'c');
// let address3 = address1;

// function areEqual(address1, address2) {
//     return address1.street === address2.street &&
//         address1.city === address2.city &&
//         address1.zipcode === address2.zipcode;
// }

// function areSame(address1, address2) {
//     return address1 === address2;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address2));

// //blog post object with properties

// let blogPost = {
//     title: 'a',//string
//     body: 'b',//string
//     author: 'c',//string
//     views: '10',//number
//     comments =[//array
//         { author: 'a', body: 'b' },
//         { author: 'c', body: 'd' },
//     ],
//     islive: true//boolean 
// };

//act as if live posting, but not ready to post
// function Blog(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }

// let blog = new Blog('a', 'b', 'c');
// console.log(blog);

//array of objects
//properties of each object

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minMealPricePerPerson: 0, maxMealPricePerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minMealPricePerPerson: 11, maxMealPricePerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minMealPricePerPerson: 21, maxMealPricePerPerson: 50},
];