import './style.css';

const listContainer = document.querySelector('ol');
const projectTitles = document.querySelector('ul')
const listHome = document.querySelector('#todoList')

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

let listName = getListName.value
let listPriority = getListPriority.value
let listDueDate = getListDueDate.value
let listArrayIndex = 0
let projectName = getProjectName.value
let projects = [];
let project = ""
let projectArrayIndex = 0

listHome.addEventListener('click', e => {
    // add display all tasks outside of projects?
})

projectTitles.addEventListener('click', e => {
    projectArrayIndex = Array.from(projectTitles.children).indexOf(e.target)
    renderProject(projectArrayIndex)
})

listContainer.addEventListener('click', e => {
    if (e.target.classList.contains('editButton')) {
        listPopup.style.visibility = "visible";
        addListButton.classList.remove('listAddMode')
        addListButton.classList.add('listEditMode')
        listArrayIndex = Array.from(listContainer.children).indexOf(e.target.parentNode)
    }
    if (e.target.classList.contains('deleteButton')) {
        listArrayIndex = Array.from(listContainer.children).indexOf(e.target.parentNode)
        projects[projectArrayIndex].tasks.splice(listArrayIndex, 1)
        renderList(projectArrayIndex)
    }
})

// list and project open form button
listButton.addEventListener('click', () => {
    if (projects.length <= 0) {
        return
    }
    else {
        listPopup.style.visibility = "visible";
        addListButton.classList.add('listAddMode')
        addProjectButton.classList.remove('projectAddMode')
    }
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

        project = createList(listName, listPriority, listDueDate)
        projects[projectArrayIndex].tasks.push(project)
        listPopup.style.visibility = "hidden";
        listFormPopup.reset()
        renderList(projectArrayIndex)
    }
    else if (e.target.classList.contains('listEditMode')) {
        e.preventDefault()
        listName = getListName.value
        listPriority = getListPriority.value
        listDueDate = getListDueDate.value
        project = createList(listName, listPriority, listDueDate)
        projects[projectArrayIndex].tasks.splice(listArrayIndex, 1, project)
        renderList(projectArrayIndex)
        listFormPopup.reset()
        addListButton.classList.remove('listEditMode')
        listPopup.style.visibility = "hidden";
    }
})

addProjectButton.addEventListener('click', e => {
    if (e.target.classList.contains('projectAddMode')) {
        e.preventDefault()
        projectName = getProjectName.value

        if (projectName == null || projectName === "") return

        project = createProject(projectName)
        projects.push(project)
        projectPopup.style.visibility = "hidden";
        projectFormPopup.reset()
        projectArrayIndex = projects.length - 1
        renderProject()
    }
    else if (e.target.classList.contains('projectEditMode')) {
        e.preventDefault()
        projectName = getProjectName.value
        project = createProject(projectName)
        projects.splice(projectArrayIndex, 1, project)
        renderProject()
        selectedProjectId = null
        addProjectButton.classList.remove('projectEditMode')
        projectPopup.style.visibility = "hidden";
    }
})

function createList(listName, listPriority, listDueDate) {
    return { id: Date.now().toString(), listName, listPriority, listDueDate }
}

function createProject(projectName) {
    return { id: Date.now().toString(), projectName, tasks: [] }
}

function renderList(projectArrayIndex) {
    if (projects[projectArrayIndex] !== undefined) {
        if (projects[projectArrayIndex].tasks.length >= 0) {
            let i = 0
            clearElement(listContainer)
            projects[projectArrayIndex].tasks.forEach(project => {
                const listElement = document.createElement('li')
                listContainer.appendChild(listElement)

                let statusCheckbox = document.createElement('input');
                let addListName = document.createElement('div');
                let addListDueDate = document.createElement('div');
                let editListButton = document.createElement('button');
                let deleteListButton = document.createElement('button');

                if (projects[projectArrayIndex].tasks[i].listPriority == "Low") {
                    listElement.classList.toggle("lowPriority");
                }
                else if (projects[projectArrayIndex].tasks[i].listPriority == "Medium") {
                    listElement.classList.toggle("mediumPriority");
                }
                else {
                    listElement.classList.toggle("highPriority");
                }

                listElement.classList.add("defaultList");
                deleteListButton.classList.add('deleteButton');
                editListButton.classList.add('editButton');

                statusCheckbox.setAttribute("type", "checkbox");
                addListName.textContent = projects[projectArrayIndex].tasks[i].listName
                addListDueDate.textContent = projects[projectArrayIndex].tasks[i].listDueDate
                editListButton.textContent = "Edit";
                deleteListButton.textContent = "Delete";

                listElement.append(statusCheckbox, addListName, addListDueDate, editListButton, deleteListButton)
                i++
            })
        }
    }
}

function renderProject(projectArrayIndex) {
    clearElement(listContainer)
    clearElement(projectTitles)
    projects.forEach(project => {
        const projectTitleList = document.createElement('button')
        projectTitles.appendChild(projectTitleList)
        projectTitleList.textContent = project.projectName
    })
    renderList(projectArrayIndex)
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

renderList()