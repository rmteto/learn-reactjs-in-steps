var api = require("../utils/api");
var TodoStore = require("../stores/TodoStore");

var TodoActions = {

  deleteTodo: (todo) => {
    console.log("Deleting TODO");
  },

  markTodoDone: (todo) => {
    console.log("Marking TODO as done");
    api.markTodoDone(todo)
       .then( () => {
         console.log("marked TODO as done successfully");
         TodoActions.getAllTodos();
       })
  },

  markTodoUnDone: (todo) => {
    console.log("Marking TODO as undone");
    api.markTodoUnDone(todo)
       .then( () => {
         console.log("marked TODO as undone successfully");
         TodoActions.getAllTodos();
       })
  },

  getAllTodos: () => {
    api.getTodos()
       .then( (responseData) => {
         var todos = responseData.todos;
         console.log("new todos", todos);
         TodoStore.setTodos(todos);
       })
  }

}

module.exports = TodoActions;
