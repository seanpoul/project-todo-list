import { liIndexNumber } from './eventlistener.js';

const getListName = document.querySelector('#listName');
const getListPriority = document.querySelector('#listPriority');
const getListDueDate = document.querySelector('#dueDateList');
let allArray = [];

// make default class for adding list items
export let createListArray = function () {
    let newListItem = {};

    newListItem.title = getListName.value;
    newListItem.priority = getListPriority.value;
    newListItem.dueDate = getListDueDate.value;

    return newListItem;
};

// add task to end of array
export let compileListArray = function (newListItem) {
    allArray.push(newListItem);
    return allArray;
}

export let fillListForm = function (liIndexNumber) {
    getListName.value = allArray[liIndexNumber].title;
    getListPriority.value = allArray[liIndexNumber].priority;
    getListDueDate.value = allArray[liIndexNumber].dueDate;
    // allArray.splice(liIndexNumber, 1);
}

// append array item to html
export let appendArrayList = function (allArray) {
    const makeListRow = document.querySelector('ol');
    makeListRow.innerHTML = "";
    for (let i = 0; i < allArray.length; i++) {
        let newListItem = document.createElement('li');
        newListItem.classList.add("defaultList", "li" + i);
        makeListRow.appendChild(newListItem);

        let statusCheckbox = document.createElement('input');
        let addListName = document.createElement('div');
        let addListDueDate = document.createElement('div');
        let editListButton = document.createElement('button');
        let deleteListButton = document.createElement('button');

        if (allArray[i].priority == "Low") {
            newListItem.classList.toggle("lowPriority");
        }
        else if (allArray[i].priority == "Medium") {
            newListItem.classList.toggle("mediumPriority");
        }
        else {
            newListItem.classList.toggle("highPriority");
        }

        editListButton.classList.add("editButton", "li" + i);
        deleteListButton.classList.add("deleteButton", "li" + i);

        statusCheckbox.setAttribute("type", "checkbox");
        addListName.textContent = allArray[i].title;
        addListDueDate.textContent = allArray[i].dueDate;
        editListButton.textContent = "Edit";
        deleteListButton.textContent = "Delete";

        newListItem.append(statusCheckbox, addListName, addListDueDate, editListButton, deleteListButton);
    }
}