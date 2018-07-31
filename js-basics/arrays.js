// const numbers = [3, 4];


// //end
// numbers.push(5, 6)

// //begining
// numbers.unshift(1, 2);

// //middle
// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers)

// const numbers = [1, 2, 3, 1, 4];
// console.log(numbers.indexOf(2));
// console.log(numbers.lastIndexOf(4));

// const courses = [
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
// ];

// const course = courses.find(course => course.name === 'a');

// console.log(course);

// const numbers = [1, 2, 3, 4];

// // //end
// // const last = numbers.pop();
// // console.log(numbers);
// // console.log(last);

// // //remove from begin
// // numbers.shift

// //middle
// numbers.splice(3, 1);
// console.log(numbers)
// splice()

// let numbers = [1, 2, 3, 4];
// let another = numbers;
// //best option if you have a single reference
// // numbers = [];
// //best option
// // numbers.length = 0;
// // numbers.splice(0, numbers.length);
// while (numbers.length > 0)
// numbers.pop();

// console.log(numbers)

//concat
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// // console.log(combined)

// // const slice = combined.slice(2, 4)
// // console.log(slice)

// const combined = [...first, 'a', ...second, 'b'];
// // const copy = combined.slice()
// const copy = [...combined];

// const numbers = [1, 2, 3];

// // for (let number of numbers)
// // console.log(number)

// // numbers.forEach((number, index) => {
// //     console.log(index, number)
// // })

// const joined = numbers.join(' ');
// console.log(joined)

// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts)

// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//     {id: 1, name: 'node.js'},
//     {id: 2, name: 'javaScript'},
// ];

// courses.sort(function(a, b) {

//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();

//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });

// console.log(courses);

// const numbers = [1, 2, 3];

// const allPositive = numbers.every(function(value){ 
//     return value >= 0;
// })

// console.log(allPositive);

// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// console.log(filtered);

// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(n => n >= 0);

// const items = filtered.map(n => '<li>' + n + '<li>')

// const html = '<ul' + items.join('') + '</ul>';

// console.log(html);

// const numbers = [1, -1, 2, 3];

// // let sum = 0;
// // for (let n of numbers)
// // sum += n;

// // console.log(sum)

// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// );

// console.log(sum);


// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i = min; i < max; i ++)
//     output.push(i);
//     return output;
// }

// const numbers = arrayFromRange(-10, 4);

// console.log(numbers)

//console.log(numbers.includes(1));

// function includes(array, searchElement) {
//     for (let element of array) 
//         if (element === searchElement)
//         return true;
//         return false;
    
// }

// const numbers = [1, 2, 3, 4];

// console.log(includes(numbers, 2));

const numbers = [1, 2, 3, 4, 1, 1, 4];

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
        output.push(element);
        return output;
}

const output = except(numbers, [1, 2, 3]);

console.log(output);