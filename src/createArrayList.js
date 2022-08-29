import {appendArrayList} from './appendArrayList.js'

export let createArrayList = function (listInfoArray) {
    const getListName = document.querySelector('#listName');
    const getListPriority = document.querySelector('#listPriority');
    const getListDueDate = document.querySelector('#dueDateList');
    const makeListRow = document.querySelector('ol');

    makeListRow.innerHTML = "";

    let newListObj = {
        title: getListName.value,
        priority: getListPriority.value,
        dueDate: getListDueDate.value
    };

    listInfoArray.push(newListObj);

    appendArrayList(listInfoArray)
};