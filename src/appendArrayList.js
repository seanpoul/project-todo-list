export let appendArrayList = function (listInfoArray) {
    for (let i = 0; i < listInfoArray.length; i++) {
        const makeListRow = document.querySelector('ol');
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
}