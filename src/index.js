import './style.css';

const listContainer = document.querySelector('ol');
// const deleteListButton = document.querySelector('deleteButton')

const listFormPopup = document.querySelector('#listForm');
const listButton = document.querySelector('#createNewList');
const listPopup = document.querySelector('#popupListContainer');
const listClose = document.querySelector('#closeListPopup');
const addListButton = document.querySelector('#createListItem');

const getListName = document.querySelector('#listName');
const getListPriority = document.querySelector('#listPriority');
const getListDueDate = document.querySelector('#dueDateList');

let listName = getListName.value
let listPriority = getListPriority.value
let listDueDate = getListDueDate.value

let selectedListId

let lists = [];
let list = ""
let newThing

listContainer.addEventListener('click', e => {
    if (e.target.classList.contains('editButton')) {
        listPopup.style.visibility = "visible";
        addListButton.classList.remove('addMode')
        addListButton.classList.add('editMode')
        getListName.value = listName
        getListPriority.value = listPriority
        getListDueDate.value = listDueDate
        selectedListId = e.target.parentNode.dataset.listId
        newThing = Array.from(listContainer.children).indexOf(e.target.parentNode)

    }
    if (e.target.classList.contains('deleteButton')) {
        selectedListId = e.target.parentNode.dataset.listId
        lists = lists.filter(list => list.id !== selectedListId)
        render()
        selectedListId = null
    }
})

listButton.addEventListener('click', () => {
    listPopup.style.visibility = "visible";
    addListButton.classList.add('addMode')
})

listClose.addEventListener('click', () => {
    listPopup.style.visibility = "hidden";
    listFormPopup.reset();
})

addListButton.addEventListener('click', e => {
    if (e.target.classList.contains('addMode')) {
        e.preventDefault()
        listName = getListName.value
        listPriority = getListPriority.value
        listDueDate = getListDueDate.value
        // const listName = getListName.value
        // const listPriority = getListPriority.value
        // const listDueDate = getListDueDate.value
        if (listName == null || listName === "") return
        // const list = createList(listName, listPriority, listDueDate)
        list = createList(listName, listPriority, listDueDate)
        lists.push(list)
        listPopup.style.visibility = "hidden";
        listFormPopup.reset()
        render()
    }
    else if (e.target.classList.contains('editMode')) {
        e.preventDefault()
        listName = getListName.value
        listPriority = getListPriority.value
        listDueDate = getListDueDate.value

        list = createList(listName, listPriority, listDueDate)

        newThing
        lists.splice(newThing, 1, list)
        render()
        selectedListId = null
        addListButton.classList.remove('editMode')
        listPopup.style.visibility = "hidden";
    }
})

function createList(listName, listPriority, listDueDate) {
    return { id: Date.now().toString(), name: listName, priority: listPriority, dueDate: listDueDate }
}

function render() {
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

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()