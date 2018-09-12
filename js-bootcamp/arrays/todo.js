//create an array with 5 things todo
//print message that includes the length where x is legnth of array
//print and first and second to last items

//1. Convert array or string to an array of objects
    //Two props - Text and completed and not completed property 
//2. Create function to remove a todo by text value

const todos = [{
    task: 'Walk Dog',
    completed: false
}, {
    task: 'Grocery Shop',
    completed: true 
}, {
    task: 'Mow Lawn',
    completed: false 
}, {
    task: 'Run',
    completed: false 
}, {
    task: 'Laundry',
    completed: false 
}]

const deleteTodo = function(task, text) {
    const index = task.findIndex(function(itemToDelete) {
        return itemToDelete.task.toLowerCase() === text.toLowerCase()  
    })
    if (index > -1) {
        task.splice(index, 1)
    }
}

deleteTodo(todos, '!Walk Dog')
console.log(todos)

//Delete the third item
//Add a new item onto the end
//Remove the first item from the list

// todos.splice(2, 1)
// todos.push('Eat Dinner')
// todos.shift()

// console.log(`Your TODO list includes ${todos.length} tasks.`)

// //Challenge
// //1. First Item
// //2. Second Item

// // todos.forEach(function (todo, index) {
// //     const num = index + 1
// //     console.log(`${num}. ${todo}`)
// // })

// //Challenge

// //Output using the for loop
// //1. Order cat food
// //2. Clean kitchen
// //3. ...

// for (let count = 0; count <= todos.length; count++) {
//     const num = count + 1
//     console.log(`${num}. ${todos[count]}`)
// }
