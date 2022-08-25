import './style.css';
import { createTodoList } from './createTodo.js';
import { createPopup } from './createPopup.js';

let pageLoad = function () {
    const body = document.querySelector('body');
    const title = document.createElement('div');
    const mainContent = document.createElement('div');
    const sidebar = document.createElement('div');
    const createNew = document.createElement('button');
    const listMenu = document.createElement('button');
    const projectMenu = document.createElement('button');
    const noteMenu = document.createElement('button');
    const info = document.createElement('div');

    title.id = "title";
    mainContent.id = "content";
    sidebar.id = "sidebar";
    createNew.id = "createNew";
    listMenu.id = "listTodo";
    projectMenu.id = "projectTodo";
    noteMenu.id = "noteTodo";
    info.id = "info";

    title.textContent = "To-do List";
    createNew.textContent = "Create New";
    listMenu.textContent = "To-do Lists";
    projectMenu.textContent = "To-do Projects";
    noteMenu.textContent = "To-do Notes";

    body.appendChild(title);
    body.appendChild(mainContent);
    mainContent.appendChild(sidebar);
    sidebar.append(createNew, listMenu, projectMenu, noteMenu);
    mainContent.appendChild(info);

    // template list item
    const randomList = document.createElement('ul');

    info.appendChild(randomList);

}

pageLoad()

// add event listener to know which function to run
// sidebar.addEventListener('click', (event) => {
createPopup(info)
createTodoList()
// })