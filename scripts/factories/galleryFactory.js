function galleryFactory(data) {
    const { name, portrait, city, country, tagline, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const headerPhotograph = document.querySelector('.photograph-header');
        const headerInfos = document.createElement('div');
        headerInfos.className = 'photographer-infos';

        const img = document.createElement('img');
        const h1 = document.createElement('h1');
        const h3 = document.createElement('h3');
        const pTagline = document.createElement('p');
        
        img.setAttribute("src", picture)
        img.setAttribute("alt", " ")
        img.className = "photographer-picture"

        
        h1.textContent = name;
        h1.className = "photographer-name"
        
        h3.textContent = city + ", " + country;
        h3.className = "photographer-location"
        
        pTagline.textContent = tagline;
        pTagline.className = "photographer-tagline"

        headerInfos.append(h1, h3, pTagline);
        headerPhotograph.append(img);

        return (headerInfos);
    }
    return { name, picture, city, country, tagline, id, getUserCardDOM }
}