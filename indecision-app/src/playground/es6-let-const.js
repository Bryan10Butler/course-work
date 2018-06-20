var nameVar = 'Bryan';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);

//unable to change const 
const nameConst = 'Frank';
console.log('nameConst', nameConst);

function testFunction() {
    const nameConst = "Aileen"
    return nameConst;
}
console.log(testFunction());

// function getPetName() {
//     var petName = 'Hal';
//     return petName;
// }

//function level scoped
// getPetName();
// console.log(petName);

//block level scoping

var fullName = 'Bryan Butler';

if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);