function photographerFactory(data, type) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const headerInfos = document.createElement('div');
        headerInfos.className = 'photographer-infos';

        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const pTagline = document.createElement('p');
        const pPrice = document.createElement('p');
        const articleLink = document.createElement('a');

        const headerPhotograph = document.querySelector('.photograph-header');
        
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
        
        articleLink.setAttribute("href", `photographer.html?id=${id}`);
        articleLink.setAttribute("aria-label", "galerie de " + name);
        articleLink.append(img, h2)
        
        if (type !== 'header'){
            article.append(articleLink, h3, pTagline, pPrice)
            return (article)
        } else if (type === 'header'){
            headerInfos.append(h1, h3, pTagline);
            headerPhotograph.append(img);
            return (headerInfos)
        } else {
            throw 'unknown type format'
        }   
    }

    return { name, picture, city, country, tagline, price, id, getUserCardDOM }
}