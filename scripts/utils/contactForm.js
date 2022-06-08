// éléments du formulaire
const main = document.querySelector('main');
const header = document.querySelector('header');
const modal = document.getElementById("contact_modal");
// background elements
const sortButton = document.getElementById('sort-media-btn');

//ouverture de la modale
function displayModal() { // appelée dans le html onclick
    modal.classList.add('modal-open'); // rend la modale visible
    main.classList.add('fade-out'); // réduit l'opacité du main dans le background
    header.classList.add('fade-out'); // réduit l'opacité du header dans le background
    //prevent background scrolling
    main.style.overflow = "hidden";
    main.style.position = "fixed";
    //gets background elements
    let galleryLinks = document.querySelectorAll('.gallery-link');
    let likeIcons = document.querySelectorAll('.like-icon');
    //prevent focus on backgroud elements on tab press
    sortButton.setAttribute("tabindex", "-1");
    galleryLinks.forEach(element => {
        element.tabIndex = -1;
    })
    likeIcons.forEach(element => {
        element.tabIndex = -1;
    })
}
// fermeture de la modale
function closeModal() { // appelée dans le html onclick
    modal.classList.remove('modal-open');
    main.classList.remove('fade-out');
    header.classList.remove('fade-out');
    //re-enable page scrolling
    main.style.overflow = "auto";
    main.style.position = "initial";
    //gets background elements
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
// fermeture de la modale au clavier avec échap
document.addEventListener('keyup', (event) => {
    //vérifie que la modale est ouverte
    if (modal.classList.contains('modal-open')) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }    
});