//Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`

}

let scoreText = getScoreText('Andrew')
console.log(scoreText)

//Challenge time
//total, tipPercent arguments
//A 25% tip on $40 would be $10

let tipCalculator = function (totalBill, tipPercent = .2) {
    let tipAmount = (totalBill * tipPercent)
    return `A ${tipPercent}% tip on ${totalBill} would be ${tipAmount}`
}

let tipPercent = tipCalculator(100, .25)
console.log(tipPercent)
