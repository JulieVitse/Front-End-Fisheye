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
        
        h2.textContent = name;

        articleLink.setAttribute("href", '#');
        articleLink.appendChild(img);
        articleLink.appendChild(h2);
        
        h3.textContent = city + ", " + country;
        
        pTagline.textContent = tagline;
        
        pPrice.textContent = price + '€/jour';
        pPrice.className = 'price';

        article.appendChild(articleLink);
        article.appendChild(h3);
        article.appendChild(pTagline);
        article.appendChild(pPrice);
        return (article);
    }
    return { name, picture, city, country, tagline, price, id, getUserCardDOM }
}