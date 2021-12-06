console.log('Starting todos.js')

const fs = require('fs')

var addTodo = (title) => {
    var todos = []
    var todo = {
        title
    }

    try {
        var todosString = fs.readFileSync('todos-data.json')
        todos = JSON.parse(todosString)
    } catch (error) {
        console.error(error)
    }

    var duplicatetodos = todos.filter((todo) => todo.title === title)

    if (duplicatetodos.length === 0) {
        todos.push(todo)
        fs.writeFileSync('todos-data.json', JSON.stringify(todos))
    }
}


var fetchTodos = () => {
    try {
        var todosString = fs.readFileSync('todos-data.json')
        todos = JSON.parse(todosString)
        return todos
    } catch (error) {
        console.error(error)
        return []
    }
}


var deleteTodo = (title) => {
    var todos = fetchTodos()
    var filteredTodos = todos.filter((todo) => todo.title !== title)
    saveTodos(filteredTodos)

    return todos.length !== filteredTodos.length
}



var saveTodos = (todos) => {
    fs.writeFileSync('todos-data.json', JSON.stringify(todos))
}

var readTodo = (title) => {
    var todos = fetchTodos()
    var filteredTodos = todos.filter((todo) => {
        return todo.title === title
    })
    return filteredTodos[0]
}

var logTodo = (todo) => {
    console.log('-----')
    console.log(`It's title is : ${todo.title}`)
}

var listTodos = () => {
    return fetchTodos()
}

module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    logTodo,
    listTodos
}