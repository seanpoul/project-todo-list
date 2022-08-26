export let listenerButton = function () {
    const listButton = document.querySelector('#createNewList');
    const listPopup = document.querySelector('#popupListContainer');
    const listClose = document.querySelector('#closeListPopup');
    const projectButton = document.querySelector('#createNewProject');
    const projectPopup = document.querySelector('#popupProjectContainer');
    const projectClose = document.querySelector('#closeProjectPopup');

    listButton.addEventListener('click', () => {
        listPopup.style.visibility = "visible";
    })

    listClose.addEventListener('click', () => {
        listPopup.style.visibility = "hidden";
    })






    projectButton.addEventListener('click', () => {
        projectPopup.style.visibility = "visible";
    })

    projectClose.addEventListener('click', () => {
        projectPopup.style.visibility = "hidden";
    })
}