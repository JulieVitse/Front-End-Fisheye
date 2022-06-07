const main = document.querySelector('main');
const header = document.querySelector('header');
const modal = document.getElementById("contact_modal");

let galleryLinks = document.getElementsByClassName('gallery-link');
let linksArray = Array.from(galleryLinks);

const sortButton = document.getElementById('sort-media-btn');

function displayModal() {    
    modal.classList.add('modal-open');
    main.classList.add('fade-out');
    header.classList.add('fade-out');
    //prevent background scrolling
    main.style.overflow = "hidden";
    main.style.position = "fixed";
    //prevent focus on background elements on tab press
    linksArray.forEach(element => {
        element.setAttribute("tabindex", "-1");
    })
    sortButton.setAttribute("tabindex", "-1");
}

function closeModal() {
    modal.classList.remove('modal-open');
    main.classList.remove('fade-out');
    header.classList.remove('fade-out');
    //re-enable page scrolling
    main.style.overflow = "auto";
    main.style.position = "initial";
    //makes elements focusable again
    linksArray.forEach(element => {
        element.removeAttribute("tabindex");
    })
    sortButton.removeAttribute("tabindex");
}

document.addEventListener('keyup', (event) => {
    //vérifie que la modale est ouverte
    if (modal.classList.contains('modal-open')) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }    
});