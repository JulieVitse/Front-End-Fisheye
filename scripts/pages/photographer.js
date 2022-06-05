//Mettre le code JavaScript lié à la page photographer.html
let mediaFilter = [];
let id = (new URL(window.location.href)).searchParams.get('id');



async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    const response = await fetch('../../data/photographers.json');
    const data = await response.json();
    
    // et bien retourner le tableau photographers seulement une fois
    return ({
        photographers: data.photographers
    })
}

async function getMedias() {
    const response = await fetch("../../data/photographers.json")
    const data = await response.json();
    mediaFilter = data.media.filter((e) => e.photographerId == id);
    return ({
        medias: mediaFilter//data.media
    })
}



async function displayData(photographers) {
    const photographHeader = document.querySelector(".photograph-header");
    const photographer = photographers.find(photographer => photographer.id == id);
    
    const photographerModel = photographerFactory(photographer, 'header');
    const userCardDOM = photographerModel.getUserCardDOM();
    photographHeader.appendChild(userCardDOM);

    const contactName = document.querySelector('h2');      
    contactName.innerHTML += '<br>' + photographer.name;

    /* photographers.forEach((photographer) => {
        if(photographer.id == id){
            
        const photographerModel = photographerFactory(photographer, 'header');
        const userCardDOM = photographerModel.getUserCardDOM();
        photographHeader.appendChild(userCardDOM);

        const contactName = document.querySelector('h2');      
        contactName.innerHTML += '<br>' + photographer.name;
        }
       
    }); */
};

async function displayMedias(medias) {
    const mediaGallery = document.querySelector('.media-wrapper');

    medias.forEach((media) => {
        
        const galleryModel = mediaFactory(media);
        const mediaCardDOM = galleryModel.getMediaCardDOM();
        mediaGallery.appendChild(mediaCardDOM);
        //console.log(media.id);
    });    
};

function totalLikes(medias) {
    let total = 0;
    medias.map(media => {
        total += media.likes;
    });
    return total;
    /* let totalLikes = medias.map(media => media.likes).reduce((likes, amount) => likes + amount); */
}

async function displayTotalLikes(medias) {
    const infoSpan = document.querySelector('.total-likes');
    infoSpan.innerText = totalLikes(medias);

}

/* function likeCounter() {
    const likeBtn = document.querySelectorAll('.like-icon');
    const infoSpan = document.querySelector('.total-likes');
    let likedMedia = false;

    likeBtn.forEach(like => {
        like.addEventListener('click', () => {
            if (likedMedia) {
                let cur_count = parseInt(infoSpan.innerText);
                infoSpan.innerText = cur_count -1;

                likedMedia = false;
            } else {
                let cur_count = parseInt(infoSpan.innerText);
                infoSpan.innerText = cur_count +1;
        
                likedMedia = true;
            }
        })
    });
} */

//LIGHTBOX OPEN & CLOSE FUNCTIONS
function openLightbox(id){ 
    const lightbox = createLightbox(mediaFilter, id);
    lightbox.displayLightbox();
}
function closeLightbox(){
    const lightboxModal = document.getElementById('lightbox_modal');
    lightboxModal.classList.add('hidden');
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    const { medias } = await getMedias();
    displayData(photographers);
    displayMedias(medias);
    displayTotalLikes(medias);
    sortMedias(medias);
    // likeCounter(medias);
};

init();