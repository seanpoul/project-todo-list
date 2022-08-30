import { createListArray, compileListArray, appendArrayList } from './functions.js';

export let listenerButton = function () {
    const listFormInfo = document.querySelector('#listForm');
    const listButton = document.querySelector('#createNewList');
    const listPopup = document.querySelector('#popupListContainer');
    const listClose = document.querySelector('#closeListPopup');
    const addListButton = document.querySelector('#createListItem');
    const allList = document.querySelector('ol');

    // const projectFormInfo = document.querySelector('#projectForm');
    const projectButton = document.querySelector('#createNewProject');
    const projectPopup = document.querySelector('#popupProjectContainer');
    const projectClose = document.querySelector('#closeProjectPopup');
    const addProjectButton = document.querySelector('#createProjectItem');

    // list popup buttons
    listButton.addEventListener('click', () => {
        listPopup.style.visibility = "visible";
    })

    listClose.addEventListener('click', () => {
        listPopup.style.visibility = "hidden";
        listFormInfo.reset();
    })

    addListButton.addEventListener('click', () => {
        listPopup.style.visibility = "hidden";
        let listArray = createListArray()
        let allListItems = compileListArray(listArray)
        listFormInfo.reset();
        appendArrayList(allListItems)
    })

    // project popup buttons
    projectButton.addEventListener('click', () => {
        projectPopup.style.visibility = "visible";
    })

    projectClose.addEventListener('click', () => {
        projectPopup.style.visibility = "hidden";
        projectFormInfo.reset();
    })

    addProjectButton.addEventListener('click', () => {
        projectPopup.style.visibility = "hidden";
        createProject()
        projectFormInfo.reset();
    })

    // edit li arrays
    allList.addEventListener('click', () => {

    })
}