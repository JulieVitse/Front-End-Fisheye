function createLightbox(medias, id) {
    let photoID = medias.findIndex(media => media.id === id);

    function displayLightbox() {
        //lightbox structure elements
        const lightboxModal = document.getElementById('lightbox_modal');
        const lightbox = document.querySelector('.lightbox');
        const lightboxFigure = document.querySelector('.lightbox-item');
        const mediaTitle = document.querySelector('.lightbox-item-title');
    
        const lightboxVideo = document.createElement("video");
        lightboxVideo.className = "lightbox-video";
        const lightboxImage = document.createElement('img');
        lightboxImage.className = "lightbox-img";

        //lightbox buttons
        const btnPrev = document.querySelector('.btn-prev');
        const btnNext = document.querySelector('.btn-next');

        lightbox.setAttribute("aria-label", "Image closeup view");
        lightboxModal.classList.remove('hidden');
        lightboxFigure.append(mediaTitle);

        if (medias[photoID].image) {

            lightboxImage.setAttribute("alt", `${medias[photoID].title}, closeup view`);
            lightboxImage.setAttribute("src", `../assets/medias/${medias[photoID].image}`);
            mediaTitle.textContent = `${medias[photoID].title}`;
          
            lightboxFigure.append(lightboxImage); 
        }

        if (medias[photoID].video) {

            lightboxVideo.setAttribute("alt", `${medias[photoID].title}`);
            lightboxVideo.setAttribute("src", `../assets/medias/${medias[photoID].video}`);
            lightboxVideo.setAttribute("controls", true);
            mediaTitle.textContent = `${medias[photoID].title}`;

            lightboxFigure.append(lightboxVideo);  
        }

        btnNext.addEventListener('click', () => {
            if (photoID < medias.length - 1) {
                photoID++;
                lightboxNavigation();
                console.log(photoID);
            } else {
                photoID = 0;
                lightboxNavigation();
            }
        })

        btnPrev.addEventListener('click', () => {
            if (photoID > 0) {
                photoID--;
                lightboxNavigation();
            } else {
                photoID = medias.length - 1;
                lightboxNavigation();
            }
        })

        function lightboxNavigation () {
            mediaTitle.textContent = `${medias[photoID].title}`;
            if (medias[photoID].image) {
                lightboxFigure.append(lightboxImage);
                lightboxImage.setAttribute("alt", `${medias[photoID].title} closeup view`);
                lightboxImage.src = `../assets/medias/${medias[photoID].image}`
                lightboxVideo.style.display = "none";
                lightboxImage.style.display = "block";
                lightboxVideo.src = "";
                lightboxVideo.removeAttribute("alt");
            } else if (medias[photoID].video){
                lightboxFigure.append(lightboxVideo);
                lightboxVideo.style.display = "block";
                lightboxImage.style.display = "none";
                lightboxImage.src = "";
                lightboxImage.removeAttribute("alt");
                lightboxVideo.setAttribute("alt", `${medias[photoID].title}`);
                lightboxVideo.src = `../assets/medias/${medias[photoID].video}`
                lightboxVideo.setAttribute("controls", true);
            }
        }
        
    }
return { displayLightbox };
}