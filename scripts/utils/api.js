async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    const response = await fetch('./data/photographers.json');
    const data = await response.json();
    console.log(data)
    
    // et bien retourner le tableau photographers seulement une fois
    return ({
        photographers: data.photographers
    })
}

async function getMedias() {
    const response = await fetch("../data/photographers.json")
    const data = await response.json();
    return ({
        medias: data.media
    })
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    const { medias } = await getMedias();
    displayData(photographers);
    displayMedias(medias);
    console.log(medias)
    
};

init();
