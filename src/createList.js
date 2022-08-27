export let createList = function () {
    const getListName = document.querySelector('#listName');
    const getListPriority = document.querySelector('#listPriority');
    const getListDueDate = document.querySelector('#dueDateList');
    const makeListTable = document.querySelector('ul');

    let listInfoArray = [];

    let newListArray = {
        title: getListName.value,
        priority: getListPriority.value,
        dueDate: getListDueDate.value
    };

    listInfoArray.push(newListArray);

    for (let i = 0; i < listInfoArray.length; i++) {
        let newListItem = document.createElement('li');

        makeListTable.appendChild(newListItem);

        newListItem.textContent = `${listInfoArray[i].title} ${listInfoArray[i].priority} ${listInfoArray[i].dueDate}`;
    }




};


