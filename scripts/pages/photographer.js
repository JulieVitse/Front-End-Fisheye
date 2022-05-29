//Mettre le code JavaScript lié à la page photographer.html
const id = (new URL(document.location)).searchParams.get('id');

async function displayData(photographers) {
    const photographHeader = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        //let urlCheck = (new URL(window.location.href)).searchParams;
        //let urlGetId = urlCheck.get('id');
        //console.log(urlCheck);
        //console.log(urlGetId);
        if(photographer.id == id){
            
        const photographerModel = photographerFactory(photographer, 'header');
        const userCardDOM = photographerModel.getUserCardDOM();
        photographHeader.appendChild(userCardDOM);

        const contactName = document.querySelector('h2');      
        contactName.innerHTML += '<br>' + photographer.name;

        }
       
    });
};

async function displayMedias(medias) {
    const mediaGallery = document.querySelector('.media-wrapper');
    medias.forEach((media) => {
        if(media.photographerId == id) {
            
        }

    })
}
/* const sortButton = document.querySelector('.sort-media.btn');
const sortOptions = document.querySelectorAll('.sort-option');
const sortIcon = document.querySelector('.sort-arrow');
const option1 = document.getElementById('option1');

sortButton.addEventListener('click', () => {
    sortIcon.classList.toggle('icon-active');
    sortOptions.forEach((option) => {
        option.classList.toggle('options-open');
    })
}) */

