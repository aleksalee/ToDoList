import { TodoItem } from './todoItem.js';

export class TodoList {
  constructor() {
    this.todoItems = [];
  }
  

  addTodoItem(text) {
    const todoItem = new TodoItem(text);
    this.todoItems.push(todoItem);
    return todoItem;
  }

  deleteTodoItem(key) {
    const index = this.todoItems.findIndex(item => item.id === Number(key));
    if (index !== -1) {
      this.todoItems.splice(index, 1);
    }
  }
}
