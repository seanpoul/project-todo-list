export function createPopup(info) {
    const popupContainer = document.createElement('div');
    const headerPopup = document.createElement('div');
    const titlePopup = document.createElement('div');
    const closeButtonPopup = document.createElement('button');
    const bodyPopup = document.createElement('div');
    const sidebarPopup = document.createElement('div');
    const chooseList = document.createElement('div');
    const chooseProject = document.createElement('div');
    const projectTitlePopup = document.createElement('textarea');

    popupContainer.id = "popupContainer";
    headerPopup.id = "headerPopup";
    titlePopup.id = "titlePopup";
    closeButtonPopup.id = "closeButtonPopup";
    bodyPopup.id = "bodyPopup";
    sidebarPopup.id = "sidebarPopup";
    chooseList.id = "chooseList";
    chooseProject.id = "chooseProject";
    projectTitlePopup.id = "projectTitlePopup";

    info.appendChild(popupContainer);
    popupContainer.appendChild(headerPopup);
    popupContainer.appendChild(bodyPopup);
    headerPopup.appendChild(titlePopup);
    headerPopup.appendChild(closeButtonPopup);
    popupContainer.appendChild(sidebarPopup);
    bodyPopup.appendChild(sidebarPopup);
    sidebarPopup.appendChild(chooseList);
    sidebarPopup.appendChild(chooseProject);
    popupContainer.appendChild(projectTitlePopup);

    titlePopup.textContent = "Create new item";
    closeButtonPopup.textContent = "Close";
    chooseList.textContent = "New To-do list";
    chooseProject.textContent = "New Project";
    projectTitlePopup.textContent = "Add Project Title here:"
    console.log("popup")
}