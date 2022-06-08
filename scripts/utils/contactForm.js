/* eslint-disable no-unused-vars */

// éléments du formulaire
const main = document.querySelector('main');
const header = document.querySelector('header');
const modal = document.getElementById("contact_modal");
const form = document.querySelector('form');
// background elements
const sortButton = document.getElementById('sort-media-btn');
const logoLink = document.getElementById('logo-link');
const contactButton = document.querySelector('.contact_button');

//ouverture de la modale
function displayModal() { // appelée dans le html onclick
    modal.classList.add('modal-open'); // rend la modale visible
    modal.setAttribute("aria-hidden", "false");
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
    logoLink.setAttribute("tabindex", "-1");
    contactButton.setAttribute("tabindex", "-1");
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
    modal.setAttribute("aria-hidden", "true");
    main.classList.remove('fade-out');
    header.classList.remove('fade-out');
    //re-enable page scrolling
    main.style.overflow = "auto";
    main.style.position = "initial";
    //gets background elements
    let galleryLinks = document.querySelectorAll('.gallery-link');
    let likeIcons = document.querySelectorAll('.like-icon');
    //makes elements focusable again
    contactButton.tabIndex = 0;
    logoLink.tabIndex = 0;
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

//listener à l'envoi du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prévient l'envoi

    //récupère le contenu des inputs
    let firstName = document.getElementById('name').value;
    let lastName = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    //log les contenus dans la console
    console.log("Prénom: " + firstName);
    console.log("Nom: " + lastName);
    console.log("Email: " + email);
    console.log("Message: " + message);
})