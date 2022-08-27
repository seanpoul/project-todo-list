export let createList = function () {
    const getListName = document.querySelector('#listName');
    const getListPriority = document.querySelector('#listPriority');
    const getListDueDate = document.querySelector('#dueDateList');
    const makeListRow = document.querySelector('ul');

    let listInfoArray = [];

    let newListArray = {
        title: getListName.value,
        priority: getListPriority.value,
        dueDate: getListDueDate.value
    };

    listInfoArray.push(newListArray);

    for (let i = 0; i < listInfoArray.length; i++) {
        let newListItem = document.createElement('li');
        newListItem.classList = "defaultList";
        makeListRow.appendChild(newListItem);

        let statusCheckbox = document.createElement('input');
        let addListName = document.createElement('div');
        let addListDueDate = document.createElement('div');
        let editListButton = document.createElement('button');
        let deleteListButton = document.createElement('button');

        statusCheckbox.setAttribute("type", "checkbox");
        addListName.textContent = newListArray.title;
        addListDueDate.textContent = newListArray.dueDate;
        editListButton.textContent = "Edit";
        deleteListButton.textContent = "Delete";


        newListItem.append(statusCheckbox, addListName, addListDueDate, editListButton, deleteListButton);

        // newListItem.textContent = `${listInfoArray[i].title} ${listInfoArray[i].priority} ${listInfoArray[i].dueDate}`;
    }



    // for (let i = 0; i < listInfoArray.length; i++) {
    //     let newListItem = document.createElement('li');

    //     makeListRow.appendChild(newListItem);

    //     newListItem.textContent = `${listInfoArray[i].title} ${listInfoArray[i].priority} ${listInfoArray[i].dueDate}`;
    // }





};


