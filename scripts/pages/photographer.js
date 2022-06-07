let mediaFilter = [];
//récupère l'id du photographe actuel depuis l'url
let id = (new URL(window.location.href)).searchParams.get('id');



async function getPhotographers() {
    const response = await fetch('../../data/photographers.json');
    const data = await response.json();
    
    return ({
        photographers: data.photographers
    })
}

async function getMedias() {
    const response = await fetch("../../data/photographers.json")
    const data = await response.json();
    //filtre et store dans un array les média selon l'id du photographe
    mediaFilter = data.media.filter((e) => e.photographerId == id);
    return ({
        medias: mediaFilter
    })
}


// Affiche les infos du photographe dans le header, créé depuis photographerFactory.js
async function displayData(photographers) {
    const photographHeader = document.querySelector(".photograph-header");
    //récupère et store l'id de chaque photographe
    const photographer = photographers.find(photographer => photographer.id == id);
    //affiche les infos correspondant au photographe selon son id
    const photographerModel = photographerFactory(photographer, 'header');
    const userCardDOM = photographerModel.getUserCardDOM();
    photographHeader.appendChild(userCardDOM);
    //affiche le nom correspondant au photographe dans la modale de formulaire
    const contactName = document.querySelector('h2');      
    contactName.innerHTML += '<br>' + photographer.name;
};

//Affiche la galerie de chaque photographe, créée depuis mediaFactory.js
async function displayMedias(medias) {
    const mediaGallery = document.querySelector('.media-wrapper');

    medias.forEach((media) => {
        
        const galleryModel = mediaFactory(media);
        const mediaCardDOM = galleryModel.getMediaCardDOM();
        mediaGallery.appendChild(mediaCardDOM);
    });    
};

// Calcule la somme des likes des médias
function totalLikes(medias) {
    let total = 0;
    medias.map(media => {
        total += media.likes;
    });
    return total;
}
// Affiche le nombre total de likes d'un photographe
async function displayTotalLikes(medias) {
    const infoSpan = document.querySelector('.total-likes');
    infoSpan.innerText = totalLikes(medias);
}

//LIGHTBOX OPEN & CLOSE FUNCTIONS
function openLightbox(id){ //appelée dans mediaFactory.js
    const lightboxModal = document.getElementById('lightbox_modal');
    lightboxModal.setAttribute("aria-hidden", 'false');
    const lightbox = createLightbox(mediaFilter, id);
    lightbox.displayLightbox();
}
function closeLightbox(){ //appelée dans le html onclick & dans lightboxFactory.js
    const lightboxModal = document.getElementById('lightbox_modal');
    lightboxModal.classList.add('hidden');
    lightboxModal.setAttribute("aria-hidden", 'true');
    const lightbox = document.querySelector('.lightbox-item');
    lightbox.innerHTML = "";
}

//initialise toutes les fonctions
async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    // Récupère les datas des médias
    const { medias } = await getMedias();
    displayData(photographers);
    displayMedias(medias);
    displayTotalLikes(medias);
    sortMedias(medias);
};
//lance l'init
init();