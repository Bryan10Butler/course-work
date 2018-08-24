//Students score, total possible score - Arguments
//15/20 -> You got a C (75%)!
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

//Function
let gradeCalculator = function (studentScore, outOfPoints) {
    //variables
    let scorePercent = (studentScore / outOfPoints) * 100
    //Perform Calculation
    if (studentScore >= 90) {
        return `You got a A (${scorePercent})!`
    } else if (studentScore >= 80) {
        return `You got a B (${scorePercent})!`
    } else if (studentScore >= 70) {
        return `You got a C (${scorePercent})!`
    } else if (studentScore >= 60) {
        return `You got a D (${scorePercent})!`
    } return `You got a F (${scorePercent})!`
}

//Call the function
let studentGrade = gradeCalculator(81, 100)
console.log(studentGrade)

//Teacher answer
let gradeCalc = function (score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ''
    
    if (percent >= 90) {
        letterGrade = 'A'
    }

    return `You got a ${letterGrade} (${percent})`
}

//Call
let result = gradeCalc(9, 20)
console.log(result)
