function createLightbox(medias, id) {
    let photoID = medias.findIndex(media => media.id === id);
    console.log(photoID);

    function displayLightbox() {
        //lightbox structure elements
        const lightboxModal = document.getElementById('lightbox_modal');
        const lightbox = document.querySelector('.lightbox');
        const lightboxFigure = document.querySelector('.lightbox-item');
        const mediaTitle = document.querySelector('.lightbox-item-title');
        //mediaTitle.className = "lightbox-item-title";
        //lightbox buttons
        const btnPrev = document.querySelector('.btn-prev');
        const btnNext = document.querySelector('.btn-next');

        lightbox.setAttribute("aria-label", "Aperçu du média");
        lightboxModal.classList.remove('hidden');
        lightboxFigure.append(mediaTitle);

        

        if (medias[photoID].image) {
            const lightboxImage = document.createElement('img');

            lightboxImage.className = "lightbox-img";
            lightboxImage.setAttribute("alt", `${medias[photoID].title}`);
            lightboxImage.setAttribute("src", `../assets/medias/${medias[photoID].image}`);
            mediaTitle.textContent = `${medias[photoID].title}`;

            btnNext.addEventListener('click', () => {
                 photoID++;
                displayLightbox();
            });
            btnPrev.addEventListener('click', () => {
                photoID--
                displayLightbox();
            });
          
            lightboxFigure.append(lightboxImage);

            
        }
        if (medias[photoID].video) {
            const lightboxVideo = document.createElement("video");
    
            lightboxVideo.className = "lightbox-video";
            lightboxVideo.setAttribute("alt", `${medias[photoID].title}`);
            lightboxVideo.setAttribute("src", `../assets/medias/${medias[photoID].video}`);
            lightboxVideo.setAttribute("controls", true);
            mediaTitle.textContent = `${medias[photoID].title}`;

            btnPrev.addEventListener('click', () => {
                photoID--;
                displayLightbox();
            })
            btnNext.addEventListener('click', () => {
                photoID++;
                displayLightbox();
            })
    
            lightboxFigure.append(lightboxVideo);
            
        }
    }
return { displayLightbox };
}