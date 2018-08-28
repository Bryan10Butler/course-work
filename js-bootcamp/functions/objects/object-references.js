let myAccount = {
    name: 'Bryan Butler',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount 
}

let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

let accountSummary = function (account) {
    return {
        Total: `Bryan has ${account.income - account.expenses} total money`,
        Income: `Bryan has ${account.income} income`,
        Expenses: `Bryan has ${account.expenses} in expenses`,
    }
    //Another approach
    //let balance = account.income - account.expenses
    //return `Account for ${account.name} has $${balance}. $${account.income} etc...`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 160)
addExpense(myAccount, 2.50)
console.log(accountSummary(myAccount))
resetAccount(myAccount)
console.log(accountSummary(myAccount))




//Allow for adding income to the account - Take account and amount

//Reset account - Reset account expenses - Static 0 Expense and account

//Account Summary

//Account for Bryan has 900. 1000 income. 100 in expesnes.

//Testing
//Add Income
//Add Expense
//Reset Acocunt
//Get Account Summary

