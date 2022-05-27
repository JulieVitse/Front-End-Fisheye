const main = document.querySelector('main');
const header = document.querySelector('header');
const modal = document.getElementById("contact_modal");

function displayModal() {    
    modal.classList.add('modal-open');
    main.classList.add('fade-out');
    header.classList.add('fade-out');
}

function closeModal() {
    modal.classList.remove('modal-open');
    main.classList.remove('fade-out');
    header.classList.remove('fade-out');
}
