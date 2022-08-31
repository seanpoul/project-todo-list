import './style.css';

const listContainer = document.querySelector('ol');

const listFormPopup = document.querySelector('#listForm');
const listButton = document.querySelector('#createNewList');
const listPopup = document.querySelector('#popupListContainer');
const listClose = document.querySelector('#closeListPopup');
const addListButton = document.querySelector('#createListItem');

const getListName = document.querySelector('#listName');
const getListPriority = document.querySelector('#listPriority');
const getListDueDate = document.querySelector('#dueDateList');

let selectedListId

let lists = [];

listButton.addEventListener('click', () => {
    listPopup.style.visibility = "visible";
})

listClose.addEventListener('click', () => {
    listPopup.style.visibility = "hidden";
    listFormPopup.reset();
})



addListButton.addEventListener('click', e => {
    e.preventDefault()
    const listName = getListName.value
    const listPriority = getListPriority.value
    const listDueDate = getListDueDate.value
    if (listName == null || listName === "") return
    const list = createList(listName, listPriority, listDueDate)
    lists.push(list)
    listPopup.style.visibility = "hidden";
    listFormPopup.reset()
    render()
})

function createList(listName, listPriority, listDueDate) {
    return { id: Date.now().toString(), name: listName, priority: listPriority, dueDate: listDueDate }
}

function render() {
    clearElement(listContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id;
        // listElement.classList.add()
        // listElement.innerText = list.name;
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