import { createTodoApp } from './render.js';
import { TodoList } from './todoList.js';

const body = document.body;
const todoApp = createTodoApp();
body.appendChild(todoApp);

const todoList = new TodoList();


const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const input = document.querySelector('.js-todo-input');
  const text = input.value.trim();

  if (text !== '') {
    const todoItem = todoList.addTodoItem(text);
    renderTodoItem(todoItem);
    input.value = '';
    input.focus();
  }
});

const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    const todoItem = todoList.todoItems.find(item => item.id === Number(itemKey));
    if (todoItem) {
      todoItem.toggleDone();
      renderTodoItem(todoItem);
    }
  }

  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    todoList.deleteTodoItem(itemKey);
    renderTodoList();
  }
});

function renderTodoItem(todoItem) {
  const list = document.querySelector('.js-todo-list');
  const item = document.querySelector(`[data-key='${todoItem.id}']`);

  if (item) {
    list.replaceChild(createTodoElement(todoItem), item);
  } else {
    list.appendChild(createTodoElement(todoItem));
  }
}

function renderTodoList() {
  const list = document.querySelector('.js-todo-list');
  list.innerHTML = '';
  todoList.todoItems.forEach(todoItem => {
    list.appendChild(createTodoElement(todoItem));
  });
}

function createTodoElement(todoItem) {
  const isChecked = todoItem.checked ? 'done' : '';
  const node = document.createElement('li');
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', todoItem.id);
  node.innerHTML = `
    <input id="${todoItem.id}" type="checkbox" class="js-tick" ${todoItem.checked ? 'checked' : ''}/>
    <label for="${todoItem.id}" class="tick"></label>
    <span>${todoItem.text}</span>
    <button class="delete-todo js-delete-todo">
      <svg><use href="#delete-icon"></use></svg>
    </button>
  `;
  return node;
}
