const main = document.querySelector('main');
const header = document.querySelector('header');
const modal = document.getElementById("contact_modal");
const sortButton = document.getElementById('sort-media-btn');

function displayModal() {    
    modal.classList.add('modal-open');
    main.classList.add('fade-out');
    header.classList.add('fade-out');
    //prevent background scrolling
    main.style.overflow = "hidden";
    main.style.position = "fixed";

    let galleryLinks = document.querySelectorAll('.gallery-link');
    let likeIcons = document.querySelectorAll('.like-icon');

    //prevent focus on background elements on tab press
    sortButton.setAttribute("tabindex", "-1");
    galleryLinks.forEach(element => {
        element.tabIndex = -1;
    })
    likeIcons.forEach(element => {
        element.tabIndex = -1;
    })
}

function closeModal() {
    modal.classList.remove('modal-open');
    main.classList.remove('fade-out');
    header.classList.remove('fade-out');
    //re-enable page scrolling
    main.style.overflow = "auto";
    main.style.position = "initial";

    let galleryLinks = document.querySelectorAll('.gallery-link');
    let likeIcons = document.querySelectorAll('.like-icon');

    //makes elements focusable again
    sortButton.tabIndex = 0;
    galleryLinks.forEach(element => {
        element.tabIndex = 0;
    })
    likeIcons.forEach(element => {
        element.tabIndex = 0;
    })
}

document.addEventListener('keyup', (event) => {
    //vérifie que la modale est ouverte
    if (modal.classList.contains('modal-open')) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }    
});