let temp = 70

//Logical And Operator
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
}

if(temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
}

//Challenge Area

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

//Are both vegan? Only after up vegan dishes
//At least one vegan? Make sure to offer up some vegan options
//Else, offer up anything on the menue

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Vegan dishes only')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Some vegan options')
} else {
    console.log('Offer anything on the menue')
}