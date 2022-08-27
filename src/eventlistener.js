import { createList } from './createList.js';
import { createProject } from './createProject.js';

export let listenerButton = function () {
    const listFormInfo = document.querySelector('#listForm');
    const listButton = document.querySelector('#createNewList');
    const listPopup = document.querySelector('#popupListContainer');
    const listClose = document.querySelector('#closeListPopup');
    const addListButton = document.querySelector('#createListItem');

    const projectFormInfo = document.querySelector('#projectForm');
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
    })

    addListButton.addEventListener('click', () => {
        listPopup.style.visibility = "hidden";
        createList()
        listFormInfo.reset();
    })

    // project popup buttons
    projectButton.addEventListener('click', () => {
        projectPopup.style.visibility = "visible";
    })

    projectClose.addEventListener('click', () => {
        projectPopup.style.visibility = "hidden";
    })

    addProjectButton.addEventListener('click', () => {
        projectPopup.style.visibility = "hidden";
        createProject()
        // projectFormInfo.reset();
    })
}