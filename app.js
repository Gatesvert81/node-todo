const fs = require('fs')
const todos = require('./todos')
const _ =  require('lodash')
const yargs = require('yargs')

const args = yargs.argv
var command = args._[0]

// console.log(args.todo)
console.log('Running command: ' + command )

if ( command === 'addTodo') {
    todos.addTodo(args.title)
} else if ( command === 'deleteTodo') {
    var todoDeleted = todos.deleteTodo(args.title)
    var message = todoDeleted ? 'Todo was deleted' : 'Todo wasnot deleted'
    console.log(message)
} else if ( command === 'readTodo') {
    var todo = todos.readTodo(args.title)
    if (todo) {
        console.log('Great! Todo was found')
        todos.logTodo(todo)
    } else {
        console.log('Whoops! Todo wasnot found.')
    }
} else if ( command === 'listTodos' ) {
    var allTodo = todos.listTodos()
    console.log(`Printing ${allTodo.length} todo(s).`)
    allTodo.forEach((todo) => todos.logTodo(todo))
} else {
    console.log('Invalid Command')
}

// fs.appendFile('file.txt', 'Writing to the Filesystem. ', (err) => {
//     if (!err) {
//         console.log(' Done')
//     } else {
//         console.error(err)
//     }
// } )

// console.log('Data ha been written to file.txt')