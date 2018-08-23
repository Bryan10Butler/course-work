//Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result;
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

//Challenge Area

//ConvertFahrenheitToCelsius

//Call a couple of times (32 -> 0) (68 -> 20)

//Print the converted values

let convertFahrenheitToCelsius = function (num) {
    let result = (num - 32) / 1.8
    return result
}

let fahrenheitConverted = convertFahrenheitToCelsius(68)
console.log(fahrenheitConverted)

