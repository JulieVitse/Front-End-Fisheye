//Mettre le code JavaScript lié à la page photographer.html
async function displayData(photographers) {
    const photographHeader = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        let urlCheck = (new URL(window.location.href)).searchParams;
        let urlGetId = urlCheck.get('id');
        //console.log(urlCheck);
        //console.log(urlGetId);
        if(photographer.id == urlGetId){
        const photographerModel = photographerFactory(photographer, 'header');
        const userCardDOM = photographerModel.getUserCardDOM();
        photographHeader.appendChild(userCardDOM);

        const contactName = document.querySelector('h2');      
        contactName.innerHTML += '<br>' + photographer.name;
        }
        //console.log(photographer.id)
    });
};

