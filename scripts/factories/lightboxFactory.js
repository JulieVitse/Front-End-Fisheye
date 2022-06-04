function createLightbox(medias, id) {
    let photoID = medias.findIndex(media => media.id === id);

    function displayLightbox() {
        //lightbox structure elements
        const lightboxModal = document.getElementById('lightbox_modal');
        const lightbox = document.querySelector('.lightbox');
        const lightboxFigure = document.querySelector('.lightbox-item');
        const mediaTitle = document.querySelector('.lightbox-item-title');
        //mediaTitle.className = "lightbox-item-title";
        const lightboxVideo = document.createElement("video");
        lightboxVideo.className = "lightbox-video";
        const lightboxImage = document.createElement('img');
        lightboxImage.className = "lightbox-img";

        //lightbox buttons
        const btnPrev = document.querySelector('.btn-prev');
        const btnNext = document.querySelector('.btn-next');

        lightbox.setAttribute("aria-label", "Aperçu du média");
        lightboxModal.classList.remove('hidden');
        lightboxFigure.append(mediaTitle);

        

        if (medias[photoID].image) {
            //const lightboxImage = document.createElement('img');

            lightboxImage.setAttribute("alt", `${medias[photoID].title}`);
            lightboxImage.setAttribute("src", `../assets/medias/${medias[photoID].image}`);
            mediaTitle.textContent = `${medias[photoID].title}`;

            /* btnNext.addEventListener('click', () => {
                photoID++;
                lightboxImage.setAttribute("alt", `${medias[photoID].title}`);
                lightboxImage.setAttribute("src", `../assets/medias/${medias[photoID].image}`);
                mediaTitle.textContent = `${medias[photoID].title}`;
                console.log(photoID);
            });
            btnPrev.addEventListener('click', () => {
                photoID--;
                lightboxImage.setAttribute("alt", `${medias[photoID].title}`);
                lightboxImage.setAttribute("src", `../assets/medias/${medias[photoID].image}`);
                mediaTitle.textContent = `${medias[photoID].title}`;
                console.log(photoID);
                
            }); */
          
            lightboxFigure.append(lightboxImage);

            
        }
        if (medias[photoID].video) {
            //const lightboxVideo = document.createElement("video");
    
            lightboxVideo.setAttribute("alt", `${medias[photoID].title}`);
            lightboxVideo.setAttribute("src", `../assets/medias/${medias[photoID].video}`);
            lightboxVideo.setAttribute("controls", true);
            mediaTitle.textContent = `${medias[photoID].title}`;

            /* btnPrev.addEventListener('click', () => {
                photoID--;
                lightboxVideo.setAttribute("alt", `${medias[photoID].title}`);
                lightboxVideo.setAttribute("src", `../assets/medias/${medias[photoID].video}`);
                lightboxVideo.setAttribute("controls", true);
                mediaTitle.textContent = `${medias[photoID].title}`;
            })
            btnNext.addEventListener('click', () => {
                photoID++;
                lightboxVideo.setAttribute("alt", `${medias[photoID].title}`);
                lightboxVideo.setAttribute("src", `../assets/medias/${medias[photoID].video}`);
                lightboxVideo.setAttribute("controls", true);
                mediaTitle.textContent = `${medias[photoID].title}`;
            }) */
    
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
            if (medias[photoID].image) {
                lightboxFigure.append(lightboxImage);
                lightboxImage.setAttribute("alt", `${medias[photoID].title}`);
                lightboxImage.src = `../assets/medias/${medias[photoID].image}`
                mediaTitle.textContent = `${medias[photoID].title}`;
                lightboxVideo.src = "";
                lightboxVideo.removeAttribute("alt");
            } else if (medias[photoID].video){
                lightboxImage.src = "";
                lightboxImage.removeAttribute("alt");
                lightboxFigure.append(lightboxVideo);
                lightboxVideo.setAttribute("alt", `${medias[photoID].title}`);
                lightboxVideo.src = `../assets/medias/${medias[photoID].video}`
                lightboxVideo.setAttribute("controls", true);
                mediaTitle.textContent = `${medias[photoID].title}`;
            }
        }
        
    }
return { displayLightbox };
}