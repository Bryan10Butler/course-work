//create an array with 5 things todo
//print message that includes the length where x is legnth of array
//print and first and second to last items
const todos = ['Walk Dog', 'Grocery Shop', 'Mow Lawn', 'Run', 'Laundry']

//Delete the third item
//Add a new item onto the end
//Remove the first item from the list

todos.splice(2, 1)
todos.push('Eat Dinner')
todos.shift()

console.log(`Your TODO list includes ${todos.length} tasks.`)

//Challenge
//1. First Item
//2. Second Item

// todos.forEach(function (todo, index) {
//     const num = index + 1
//     console.log(`${num}. ${todo}`)
// })

//Challenge

//Output using the for loop
//1. Order cat food
//2. Clean kitchen
//3. ...

for (let count = 0; count <= todos.length; count++) {
    const num = count + 1
    console.log(`${num}. ${todos[count]}`)
}
