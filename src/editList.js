export let editListItem = function (listInfoArray) {
    const getListName = document.querySelector('#listName');
    const getListPriority = document.querySelector('#listPriority');
    const getListDueDate = document.querySelector('#dueDateList');
    const makeListRow = document.querySelector('ol');

    console.log(listInfoArray)


    let newListItem = Array.from(document.querySelectorAll('li'));
    let statusCheckbox = document.querySelector('input');
    let addListName = document.querySelector('div');
    let addListDueDate = document.querySelector('div');
    let editListButton = document.querySelector('.editButton');
    let deleteListButton = document.querySelector('button');



    console.log(newListItem)

}