export function createPopup(info) {
    const popupContainer = document.createElement('div');
    const headerPopup = document.createElement('div');
    const titlePopup = document.createElement('div');
    const closeButtonPopup = document.createElement('button');

    popupContainer.id = "popupContainer";
    headerPopup.id = "headerPopup";
    titlePopup.id = "titlePopup";
    closeButtonPopup.id = "closeButtonPopup";

    info.appendChild(popupContainer);
    popupContainer.appendChild(headerPopup);
    headerPopup.appendChild(titlePopup);
    headerPopup.appendChild(closeButtonPopup);

    titlePopup.textContent = "Create new item";
    closeButtonPopup.textContent = "Close";


}