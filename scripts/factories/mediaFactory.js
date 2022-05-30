function mediaFactory(data) {
    const { photographerId, title, image, video, likes } = data;

    const picture = `/assets/medias/${image}`;
    const videos = `/assets/medias/${video}`;

    function getMediaCardDOM() {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const spanLikes = document.createElement('span');
        const likeIcon = document.createElement('i');
        const videoMedia = document.createElement('video');

        videoMedia.setAttribute("src", videos);
        videoMedia.setAttribute("controls", true);
        videoMedia.setAttribute("type", "video/mp4");
        videoMedia.className = "gallery-vid";
        
        
        img.setAttribute("src", picture);
        img.setAttribute("alt", title);
        img.className = "gallery-img";

        spanLikes.textContent = likes;
        spanLikes.className = "likes-amount";
        likeIcon.className = "fa-solid fa-heart like-icon";
        spanLikes.append(likeIcon);

        figcaption.textContent = title;
        figcaption.append(spanLikes);
        
        if (image){
            figure.append(img, figcaption);
            return (figure);
        } else if (video){
            figure.append(videoMedia, figcaption);
            return (figure);
        } else {
            throw 'unknown type format';
        }   
    }

    return { photographerId, title, image, video, picture, videos, likes, getMediaCardDOM };
}