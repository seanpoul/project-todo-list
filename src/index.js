import './style.css';

const listContainer = document.querySelector('ol');
const projectTitles = document.querySelector('ul')
const listHome = document.querySelector('#todoList')
const projectHome = document.querySelector('#todoProject')

// list options
const listFormPopup = document.querySelector('#listForm');
const listButton = document.querySelector('#createNewList');
const listPopup = document.querySelector('#popupListContainer');
const listClose = document.querySelector('#closeListPopup');
const addListButton = document.querySelector('#createListItem');
const getListName = document.querySelector('#listName');
const getListPriority = document.querySelector('#listPriority');
const getListDueDate = document.querySelector('#dueDateList');

// project options
const projectFormPopup = document.querySelector('#projectForm');
const projectButton = document.querySelector('#createNewProject');
const projectPopup = document.querySelector('#popupProjectContainer');
const projectClose = document.querySelector('#closeProjectPopup');
const addProjectButton = document.querySelector('#createProjectItem');
const getProjectName = document.querySelector('#projectName');
const getProjectPriority = document.querySelector('#projectPriority');
const getProjectDueDate = document.querySelector('#dueDateProject');

let listName = getListName.value
let listPriority = getListPriority.value
let listDueDate = getListDueDate.value

let selectedListId

let lists = [];
let list = ""
let listArrayIndex

let projectName = getProjectName.value
let projectPriority = getProjectPriority.value
let projectDueDate = getProjectDueDate.value

let selectedProjectId

let projects = [];
let project = ""
let projectArrayIndex

listHome.addEventListener('click', e => {
    renderList()
})

projectHome.addEventListener('click', e => {
    renderProject()
})

listContainer.addEventListener('click', e => {
    if (e.target.classList.contains('editButton')) {
        listPopup.style.visibility = "visible";
        addListButton.classList.remove('listAddMode')
        addListButton.classList.add('listEditMode')
        selectedListId = e.target.parentNode.dataset.listId
        listArrayIndex = Array.from(listContainer.children).indexOf(e.target.parentNode)
    }
    if (e.target.classList.contains('deleteButton')) {
        selectedListId = e.target.parentNode.dataset.listId
        lists = lists.filter(list => list.id !== selectedListId)
        renderList()
        selectedListId = null
    }
})

// list and project open form button
listButton.addEventListener('click', () => {
    listPopup.style.visibility = "visible";
    addListButton.classList.add('listAddMode')
    addProjectButton.classList.remove('projectAddMode')
})
projectButton.addEventListener('click', () => {
    projectPopup.style.visibility = "visible";
    addProjectButton.classList.add('projectAddMode')
    addListButton.classList.remove('listAddMode')
})

// list and project close form button
listClose.addEventListener('click', () => {
    listPopup.style.visibility = "hidden";
    listFormPopup.reset();
})
projectClose.addEventListener('click', () => {
    projectPopup.style.visibility = "hidden";
    projectFormPopup.reset();
})

addListButton.addEventListener('click', e => {
    if (e.target.classList.contains('listAddMode')) {
        e.preventDefault()
        listName = getListName.value
        listPriority = getListPriority.value
        listDueDate = getListDueDate.value

        if (listName == null || listName === "") return

        list = createList(listName, listPriority, listDueDate)
        lists.push(list)
        listPopup.style.visibility = "hidden";
        listFormPopup.reset()
        renderList()
    }
    else if (e.target.classList.contains('listEditMode')) {
        e.preventDefault()
        listName = getListName.value
        listPriority = getListPriority.value
        listDueDate = getListDueDate.value
        list = createList(listName, listPriority, listDueDate)
        lists.splice(listArrayIndex, 1, list)
        renderList()
        selectedListId = null
        addListButton.classList.remove('listEditMode')
        listPopup.style.visibility = "hidden";
    }
})

addProjectButton.addEventListener('click', e => {
    if (e.target.classList.contains('projectAddMode')) {
        e.preventDefault()
        projectName = getProjectName.value
        projectPriority = getProjectPriority.value
        projectDueDate = getProjectDueDate.value

        console.log(projectName)

        if (projectName == null || projectName === "") return

        project = createProject(projectName, projectPriority, projectDueDate)
        projects.push(project)
        projectPopup.style.visibility = "hidden";
        projectFormPopup.reset()
        renderProject()
    }
    else if (e.target.classList.contains('projectEditMode')) {
        e.preventDefault()
        projectName = getProjectName.value
        projectPriority = getProjectPriority.value
        projectDueDate = getProjectDueDate.value
        project = createProject(projectName, projectPriority, projectDueDate)
        projects.splice(projectArrayIndex, 1, project)
        renderProject()
        selectedProjectId = null
        addProjectButton.classList.remove('projectEditMode')
        projectPopup.style.visibility = "hidden";
    }
})


function createList(listName, listPriority, listDueDate) {
    return { id: Date.now().toString(), name: listName, priority: listPriority, dueDate: listDueDate }
}

function createProject(projectName, projectPriority, projectDueDate) {
    return { id: Date.now().toString(), name: projectName, priority: projectPriority, dueDate: projectDueDate }
}

function renderList() {
    clearElement(listContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id;
        listContainer.appendChild(listElement)

        let statusCheckbox = document.createElement('input');
        let addListName = document.createElement('div');
        let addListDueDate = document.createElement('div');
        let editListButton = document.createElement('button');
        let deleteListButton = document.createElement('button');

        if (list.priority == "Low") {
            listElement.classList.toggle("lowPriority");
        }
        else if (list.priority == "Medium") {
            listElement.classList.toggle("mediumPriority");
        }
        else {
            listElement.classList.toggle("highPriority");
        }

        listElement.classList.add("defaultList");
        deleteListButton.classList.add('deleteButton');
        editListButton.classList.add('editButton');

        statusCheckbox.setAttribute("type", "checkbox");
        addListName.textContent = list.name
        addListDueDate.textContent = list.dueDate
        editListButton.textContent = "Edit";
        deleteListButton.textContent = "Delete";

        listElement.append(statusCheckbox, addListName, addListDueDate, editListButton, deleteListButton)
    })
}

function renderProject() {
    clearElement(listContainer)
    projects.forEach(project => {
        const projectElement = document.createElement('li')
        projectElement.dataset.projectId = project.id;
        listContainer.appendChild(projectElement)

        let statusCheckbox = document.createElement('input');
        let addProjectName = document.createElement('div');
        let addProjectDueDate = document.createElement('div');
        let editProjectButton = document.createElement('button');
        let deleteProjectButton = document.createElement('button');

        if (project.priority == "Low") {
            projectElement.classList.toggle("lowPriority");
        }
        else if (project.priority == "Medium") {
            projectElement.classList.toggle("mediumPriority");
        }
        else {
            projectElement.classList.toggle("highPriority");
        }

        projectElement.classList.add("defaultList");
        deleteProjectButton.classList.add('deleteButton');
        editProjectButton.classList.add('editButton');

        statusCheckbox.setAttribute("type", "checkbox");
        addProjectName.textContent = project.name
        addProjectDueDate.textContent = project.dueDate
        editProjectButton.textContent = "Edit";
        deleteProjectButton.textContent = "Delete";

        projectElement.append(statusCheckbox, addProjectName, addProjectDueDate, editProjectButton, deleteProjectButton)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

renderList()