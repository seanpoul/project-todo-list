import { createListArray, compileListArray, appendArrayList, fillListForm } from './functions.js';

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

    let addListItemToDOM = function add() {
        let listArray = createListArray()
        let allListItems = compileListArray(listArray)
        appendArrayList(allListItems)
    }

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
        addListItemToDOM()
        listFormInfo.reset();
    })

    // edit li arrays
    allList.addEventListener('click', (event) => {
        let liIndexNumber = Array.from(allList.querySelectorAll('.defaultList')).indexOf(event.target.parentElement);
        fillListForm(liIndexNumber);
        listPopup.style.visibility = "visible";
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
}