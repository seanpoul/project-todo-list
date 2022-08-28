export let createList = function (listInfoArray) {
    const getListName = document.querySelector('#listName');
    const getListPriority = document.querySelector('#listPriority');
    const getListDueDate = document.querySelector('#dueDateList');
    const makeListRow = document.querySelector('ol');

    makeListRow.innerHTML = "";

    let newListArray = {
        title: getListName.value,
        priority: getListPriority.value,
        dueDate: getListDueDate.value
    };

    listInfoArray.push(newListArray);

    for (let i = 0; i < listInfoArray.length; i++) {
        let newListItem = document.createElement('li');
        newListItem.classList.add("defaultList", "li" + i);
        makeListRow.appendChild(newListItem);

        let statusCheckbox = document.createElement('input');
        let addListName = document.createElement('div');
        let addListDueDate = document.createElement('div');
        let editListButton = document.createElement('button');
        let deleteListButton = document.createElement('button');

        if (listInfoArray[i].priority == "Low") {
            newListItem.classList.toggle("lowPriority");
        }
        else if (listInfoArray[i].priority == "Medium") {
            newListItem.classList.toggle("mediumPriority");
        }
        else {
            newListItem.classList.toggle("highPriority");
        }

        editListButton.classList.add("editButton", "li" + i);
        deleteListButton.classList.add("deleteButton", "li" + i);

        statusCheckbox.setAttribute("type", "checkbox");
        addListName.textContent = listInfoArray[i].title;
        addListDueDate.textContent = listInfoArray[i].dueDate;
        editListButton.textContent = "Edit";
        deleteListButton.textContent = "Delete";

        newListItem.append(statusCheckbox, addListName, addListDueDate, editListButton, deleteListButton);
    }
};