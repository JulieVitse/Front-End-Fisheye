function mediaFactory(data) {
    const { photographerId, title, id, likes, ...rest } = data;
    //console.log(rest);
    let urlMedia;
    if (data.video){
        urlMedia = data.video;
    } else {
        urlMedia = data.image;
    }
    
    const fullUrl = `/assets/medias/${urlMedia}`;
    // const videos = `/assets/medias/${video}`;

    function getMediaCardDOM() {
        //création des éléments des galeries
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const spanLikes = document.createElement('span');
        const likeIcon = document.createElement('i');
        const videoMedia = document.createElement('video');
        const mediaLink = document.createElement('a');
        //ajout des attributs et classe des vidéos
        videoMedia.setAttribute("src", fullUrl);
        videoMedia.setAttribute("type", "video/mp4");
        //videoMedia.setAttribute("onclick", `openLightbox(${id})`);
        videoMedia.className = "gallery-vid";
        //ajout des attributs et classe des images
        img.setAttribute("src", fullUrl);
        img.setAttribute("alt", title);
        //img.setAttribute("onclick", `openLightbox(${id})`);
        img.className = "gallery-img";

        mediaLink.setAttribute("href", fullUrl);
        mediaLink.setAttribute("aria-label", `${title}, closeup view`);
        mediaLink.className = "gallery-link";

        mediaLink.addEventListener('click', (event) => {
            event.preventDefault();
            openLightbox(id);
        })

        mediaLink.addEventListener('keypress', (event) => {
            event.preventDefault();
            if (event.key === "Enter") {
                openLightbox(id);
            }
        })

        spanLikes.textContent = likes;
        spanLikes.className = "likes-amount";
        spanLikes.setAttribute("aria-label", 'likes');
        likeIcon.className = "fa-solid fa-heart like-icon";
        spanLikes.append(likeIcon);

        //gestion des likes au clic
        let mediaIsLiked = false;
        let currentLikes = likes;

        likeIcon.addEventListener('click', () => {
            if (mediaIsLiked == false) {
                spanLikes.textContent = currentLikes + 1;
                likeIcon.classList.add('liked');
                let totalLikes = document.querySelector('.total-likes');
                totalLikes.textContent = parseInt(totalLikes.textContent) + 1;
                spanLikes.append(likeIcon);
            } else {
                spanLikes.textContent = currentLikes;
                likeIcon.classList.remove('liked');
                let totalLikes = document.querySelector('.total-likes');
                totalLikes.textContent = parseInt(totalLikes.textContent) - 1;
                spanLikes.append(likeIcon);
            }
            mediaIsLiked = !mediaIsLiked;
            console.log(mediaIsLiked);
        });

        figcaption.textContent = title;
        figcaption.append(spanLikes);
        
        if (data.image){
            mediaLink.append(img);
            figure.append(mediaLink, figcaption);
            return (figure);
        } else if (data.video){
            mediaLink.append(videoMedia);
            figure.append(mediaLink, figcaption);
            return (figure);
        } else {
            throw 'unknown type format';
        }    
    }

    return { photographerId, title, likes, id, getMediaCardDOM };
}