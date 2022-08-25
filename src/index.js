import './style.css';

let pageLoad = function () {
    const body = document.querySelector('body');
    const title = document.createElement('div');
    const mainContent = document.createElement('div');
    const sidebar = document.createElement('div');
    const listMenu = document.createElement('div');
    const projectMenu = document.createElement('div');
    const noteMenu = document.createElement('div');
    const info = document.createElement('div');

    title.id = "title";
    title.textContent = "To-do List";
    mainContent.id = "content";
    sidebar.id = "sidebar";
    listMenu.id = "listTodo";
    listMenu.textContent = "To-do Lists";
    projectMenu.id = "projectTodo";
    projectMenu.textContent = "To-do Projects";
    noteMenu.id = "noteTodo";
    noteMenu.textContent = "To-do Notes";
    info.id = "info";

    body.appendChild(title);
    body.appendChild(mainContent);
    mainContent.appendChild(sidebar);
    sidebar.append(listMenu, projectMenu, noteMenu);
    mainContent.appendChild(info);
}

pageLoad()