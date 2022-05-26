function galleryFactory(data) {
    const { name, portrait, city, country, tagline, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const galleryHeader = document.createElement('div');

        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const pTagline = document.createElement('p');
        
        img.setAttribute("src", picture)
        img.setAttribute("alt", " ")
        
        h2.textContent = name;
        
        h3.textContent = city + ", " + country;
        
        pTagline.textContent = tagline;

        galleryHeader.append(img, h2, h3, pTagline);
        
        return (galleryHeader);
    }
    return { name, picture, city, country, tagline, id, getUserCardDOM }
}