function lightboxFactory(data) {
    const {title, id, image, video} = data;

    //console.log(id,image);

    let urlMedia;
    if (data.video){
        urlMedia = data.video;
    } else {
        urlMedia = data.image;
    }
    
    const fullUrl = `/assets/medias/${urlMedia}`;

    function getLightbox() {
        const lightboxFigure = document.createElement('figure');
        lightboxFigure.className = "lightbox-item";

        const lightboxClose = document.createElement('i');
        lightboxClose.className = "fa-solid fa-xmark lightbox-close";
        lightboxClose.setAttribute("onclick", `closeLightbox()`);

        const lightBoxPrev = document.createElement('i');
        lightBoxPrev.className = "fa-solid fa-chevron-left";

        const lightBoxNext = document.createElement('i');
        lightBoxNext.className = "fa-solid fa-chevron-right";

        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const videoMedia = document.createElement('video');

        videoMedia.setAttribute("src", fullUrl);
        videoMedia.setAttribute("type", "video/mp4");
        videoMedia.className = "lightbox-video";
        
        img.setAttribute("src", fullUrl);
        img.setAttribute("alt", title);
        img.className = "lightbox-image";

        figcaption.textContent = title;

        if (data.image){
            lightboxFigure.append(img, figcaption);
            return (lightboxFigure);
        } else if (data.video){
            lightboxFigure.append(videoMedia, figcaption);
            return (lightboxFigure);
        } else {
            throw 'unknown type format';
        }
    }
    return {title, id, image, video, getLightbox}  
}