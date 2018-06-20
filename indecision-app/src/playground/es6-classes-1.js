class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return ' Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    //can be written this way or the way below
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major} `;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        //name and age setup correctly by letting parent
        //constructor worry about this
        super(name, age);
        this.homeLocation = homeLocation; 
    }
    getGreeting() {
        //get original greeting
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}. `;
        }
        return greeting;
    }
}

const me = new Traveler('Bryan Butler', 27, 'Boston')
//console.log(me.getGreeting());
console.log(me.getGreeting());

const other = new Traveler();
//console.log(other.getGreeting());
console.log(other.getGreeting());