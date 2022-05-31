//Mettre le code JavaScript lié à la page photographer.html
let id = (new URL(window.location.href)).searchParams.get('id');
let photoId;


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
    const lightboxModal = document.querySelector('.lightbox');
    
    const mediasFilter = medias.filter(media => media.photographerId == id);

    /* const photoFilter = mediasFilter.filter(media => media.id == photoId);
    console.log(photoFilter); */
    //console.log(mediasFilter);
    
    mediasFilter.forEach((media) => {
        
        const galleryModel = mediaFactory(media);
        const mediaCardDOM = galleryModel.getMediaCardDOM();
        mediaGallery.appendChild(mediaCardDOM);

        const lightboxModel = lightboxFactory(media);
        const lightboxDOM = lightboxModel.getLightbox();
        lightboxModal.appendChild(lightboxDOM);
        
    });
}; 

function openLightbox(){
    const lightboxModal = document.getElementById('lightbox_modal');
    lightboxModal.classList.remove('hidden');
}


function closeLightbox(){
    const lightboxModal = document.getElementById('lightbox_modal');
    lightboxModal.classList.add('hidden');
}