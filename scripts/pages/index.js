async function getPhotographers() {
    // récupère les datas dans le json
    const response = await fetch('../../data/photographers.json');
    const data = await response.json();
    // retourne data des photographes
    return ({
        photographers: data.photographers
    })
}
// affiche les datas des photographes
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    // créé et affiche chaque article depuis la factory
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    // affiche les datas des photographes
    displayData(photographers); 
};
// initialise la page
init();
