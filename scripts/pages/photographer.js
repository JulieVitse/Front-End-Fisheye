//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographerData() {
    // Penser à remplacer par les données récupérées dans le json
    const response = await fetch('./data/photographers.json');
    const data = await response.json();
    
    // et bien retourner le tableau photographers seulement une fois
    return ({
        photographers: data.photographers
    })
}

async function photographerData(photographers) {
    const photographHeader = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        let urlCheck = (new URL(window.location.href)).searchParams;
        let urlGetId = urlCheck.get('id');
        console.log(urlCheck);
        console.log(urlGetId);
        if(photographer.id == urlGetId){
        const photographerModel = galleryFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographHeader.appendChild(userCardDOM);
        }
        console.log(photographer.id)
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    photographerData(photographers);
};

init();