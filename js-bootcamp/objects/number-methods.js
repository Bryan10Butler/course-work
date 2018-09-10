let num = 10.941

//2 decimals
console.log(num.toFixed(2))

//round
console.log(Math.round(num))

//round down
console.log(Math.floor(num))

//round up
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//0 - .99999
console.log(randomNum)

//Challenge Area

//range 1 - 5 true if guess is correct, false if not corret

let randomNumGame = function (userGuess) {
    const min = 1
    const max = 5
    let randomNum = Math.floor(Math.random() * (max - min +1)) + min
    //#1
    return userGuess === randomNum
    //#2
    // if (userGuess === randomNum) {
    //     return true
    // }
    // return false
}


console.log(randomNumGame(1))
