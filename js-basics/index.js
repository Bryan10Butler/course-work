//Primitive
let name = 'Mosh'; //String Literal
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let firstName = undefined;
let selectedColer = null; //clear the value of the variable

//Object with Key Value pair
let person = {
    name: 'Mosh',
    age: 30
};

//Dot Notation
console.log(person.name);

//Bracket Notation
person ['name'] = 'Mary';

//array
//empty array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);


//funcitons
//name is parameter and input to this function
//Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');
greet('Mary');

//calculates a value
function square(number) {
    return number * number;
}

console.log(square(2));