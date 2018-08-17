//Lexical Scope (static scope)
//Global Scopt - Defined outside of all code blocks
//local Scope - Defined inside a code block




let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
}

console.log(varTwo);