export class ListManager {
    constructor() {
      this.todoLists = [];
    }
  
    createTodoList(name) {
      const newList = new TodoList(name);
      this.todoLists.push(newList);
      return newList;
    }
  
    deleteTodoList(index) {
      if (index >= 0 && index < this.todoLists.length) {
        const deletedList = this.todoLists.splice(index, 1)[0];
        deletedList.clearElement(); // Optional: Clear the DOM element associated with the deleted list
      }
    }
  
    getTodoLists() {
      return this.todoLists;
    }
  }
  