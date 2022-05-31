//Mettre le code JavaScript lié à la page photographer.html
let id = (new URL(window.location.href)).searchParams.get('id');


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
    
    const mediasFilter = medias.filter(media => media.photographerId == id);
    console.log(mediasFilter);
    mediasFilter.forEach((media) => {
        
            const galleryModel = mediaFactory(media);
            const mediaCardDOM = galleryModel.getMediaCardDOM();
            mediaGallery.appendChild(mediaCardDOM);
        
    });
}; 


