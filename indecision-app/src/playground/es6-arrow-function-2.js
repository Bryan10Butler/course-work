//arguments object - no longer bound with arrow functions
//this keyword - no longer bound

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

//this keyword - no longer bound
const user = {
    name: 'Bryan',
    cities: ['Boston', 'New York', 'Portsmouth'],
    printPlacesLived () {
        return this.cities.map((cities) => this.name + ' has lived in ' + cities); 
    }
};
console.log(user.printPlacesLived());

//Challenge area
const multiplier = {
    multiplyBy: 2,
    numbers: [0, 1, 2, 3],
    multiply() {
        return this.numbers.map((numbers) => this.multiplyBy * numbers);
    }
};
console.log(multiplier.multiply());

//testing fun
const dogs = {
    name: 'Bryan',
    dogs: ['Keesa', 'Molly', 'Shadow', 'Josie', 'Quincy', 'Mel'],
    printDogsOwned() {
        return this.dogs.map((dogs) => this.name + ' has ownded ' + dogs);
    }
};
console.log(dogs.printDogsOwned());

//testing
const foods = {
    name: 'Aileen',
    food: ['Pizza', 'Salad', 'Tacos'],
    displayFavoriteFoods() {
        return this.food.map((food) => this.name + ' likes ' + this.food);
    }
};
console.log(foods.displayFavoriteFoods());