/* eslint-disable no-unused-vars */
function photographerFactory(data, type) {
    const { name, portrait, city, country, tagline, price, id } = data;

    //récupère la photo de profil
    const picture = `assets/photographers/${portrait}`;

    // fonction de construction des cartes de profils
    function getUserCardDOM() {
        // création des éléments
        const article = document.createElement('article'); // container entier
        const headerInfos = document.createElement('div'); // container infos utilisé pour photographer.html
        headerInfos.className = 'photographer-infos';
        const h1 = document.createElement('h1'); // nom du photographe
        const h2 = document.createElement('h2'); // nom du photographe - utilisé pour photographer.html
        const h3 = document.createElement('h3'); // premier sous-titre, pays et ville
        const img = document.createElement('img'); // image portrait du photographe
        const pTagline = document.createElement('p'); // tagline
        const pPrice = document.createElement('p'); // prix
        const articleLink = document.createElement('a'); // lien contenant la photo et le nom du photographe
        const photographPrice = document.querySelector('.photograph-price'); // prix du photographe pour photographer.html

        const headerPhotograph = document.querySelector('.photograph-header'); // banner infos dans photographer.html

        // ajout des attributs, classe et contenu de chaque élémént
        img.setAttribute("src", picture)
        img.setAttribute("alt", " ")
        img.className = "photographer-picture"

        h1.textContent = name;
        h1.className = "photographer-name"

        h2.textContent = name;
        h2.className = "photographer-name"
        
        h3.textContent = city + ", " + country;
        h3.className = "photographer-location"
        
        pTagline.textContent = tagline;
        pTagline.className = "photographer-tagline"

        pPrice.textContent = `${price}€/jour`;
        pPrice.className = 'price';
        
        articleLink.setAttribute("href", `photographer.html?id=${id}`); //attache l'id correspondant au photographe cliqué à l'url de la page photographer.html
        articleLink.setAttribute("aria-label", "galerie de " + name); //label le lien avec le nom du photographe correspondant
        articleLink.append(img, h2); //attache la photo et le nom au lien
        
        if (type !== 'header'){ // utilisé pour la page d'index
            article.append(articleLink, h3, pTagline, pPrice)
            return (article)
        } else if (type === 'header'){ // utilisé pour la page photographer.html
            photographPrice.textContent = `${price}€ / jour`; // affiche le prix du photographe dans l'encart en bas de page
            headerInfos.append(h1, h3, pTagline); // infos partie gauche de la banner
            headerPhotograph.append(img); // portait partie droite de la banner
            return (headerInfos)
        } else {
            throw 'unknown type format'
        }   
    }

    return { name, portrait, city, country, tagline, price, id, getUserCardDOM }
}