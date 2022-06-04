function mediaFactory(data) {
    const { photographerId, title, id, ...rest } = data;
    let mediaIsLiked = false;
    let likes = data.likes;
    

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
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const spanLikes = document.createElement('span');
        const likeIcon = document.createElement('i');
        const videoMedia = document.createElement('video');

        videoMedia.setAttribute("src", fullUrl);
        videoMedia.setAttribute("type", "video/mp4");
        videoMedia.setAttribute("onclick", `openLightbox(${id})`);
        videoMedia.className = "gallery-vid";
        
        img.setAttribute("src", fullUrl);
        img.setAttribute("alt", title);
        img.setAttribute("onclick", `openLightbox(${id})`);
        img.className = "gallery-img";

        spanLikes.textContent = likes;
        spanLikes.className = "likes-amount";
        likeIcon.className = "fa-solid fa-heart like-icon";

        spanLikes.append(likeIcon);

        likeIcon.addEventListener('click', () => {
            if (mediaIsLiked) {
                likes--;
                mediaIsLiked = false;
                console.log(likes);
            } else {
                likes++;
                mediaIsLiked = true;
                console.log(likes);
            }
            spanLikes.textContent = likes;
            spanLikes.append(likeIcon);
        })

        figcaption.textContent = title;
        figcaption.append(spanLikes);
        
        if (data.image){
            figure.append(img, figcaption);
            return (figure);
        } else if (data.video){
            figure.append(videoMedia, figcaption);
            return (figure);
        } else {
            throw 'unknown type format';
        }    
    }

    return { photographerId, title, likes, id, getMediaCardDOM };
}