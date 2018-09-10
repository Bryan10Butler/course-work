let name = '  Bryan Butler   '

// Length Property
console.log(name.length)

// Convert to Upper Case
console.log(name.toUpperCase())

//Convert to Lower Case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123098'
console.log(password.includes('password'))

//Trim
console.log(name.trim())


//Challenge

//Function isValidPassword
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

//return true if length is more than 8 and does not contain password

console.log(isValidPassword('ABCD'))
console.log(isValidPassword('ABCDEDdfdfdfd'))
console.log(isValidPassword('ABCDPassword'))