//array create
const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: "Office modification",
    body: 'Get a new seat'
}]

//Pop removes last item
// console.log(notes.pop())
// //Push adds to end of array
// notes.push('My new note')

// //Shift removes first item of array
// console.log(notes.shift())
// //Unshift adds to beginning of array
// notes.unshift('My first note')

// //Splice allows you to remove
// //Start at index of 1, remove 1 item
// notes.splice(1, 1)
// //Add item at starting point 1
// notes.splice(1, 0, 'This is the new second item')

// //Replacing and adding
// notes.splice(1, 1, 'This is the new second item')

//Replacing and adding
// notes[2] = 'This is not the new note 3'


// notes.forEach(function (item, index){
//     console.log(index)
//     console.log(item)
// })

console.log(notes.length)
console.log(notes)

// //Counting... 1
// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }

// for (let count = notes.length-1; count >= 0; count--) {
//     console.log(notes[count])
// }

console.log(notes.indexOf('Note 2'))
