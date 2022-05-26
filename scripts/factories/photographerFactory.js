function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const articleLink = document.createElement('a');
        const h3 = document.createElement('h3');
        const pTagline = document.createElement('p');
        const pPrice = document.createElement('p');

        img.setAttribute("src", picture)
        img.setAttribute("alt", " ")
        img.className = "photographer-picture"
        
        h2.textContent = name;
        h2.className = "photographer-name"
        
        articleLink.setAttribute("href", `photographer.html?id=${id}`);
        articleLink.setAttribute("aria-label", "galerie de " + name);
        articleLink.append(img, h2)

        h3.textContent = city + ", " + country;
        h3.className = "photographer-location"
        
        pTagline.textContent = tagline;
        pTagline.className = "photographer-tagline"
        
        pPrice.textContent = price + '€/jour';
        pPrice.className = 'price';

        article.append(articleLink, h3, pTagline, pPrice);
        
        return (article);
    }
    return { name, picture, city, country, tagline, price, id, getUserCardDOM }
}