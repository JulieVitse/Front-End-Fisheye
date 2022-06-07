function sortMedias(medias) {
  //sorting list elements
  const sortButton = document.getElementById('sort-media-btn');
  const sortList = document.getElementById('sort-list');
  const sortOption = document.querySelectorAll('li');
  //gallery element
  const mediaGallery = document.querySelector('.media-wrapper');

  //function pour afficher la liste d'options de tri
  function showSortList() {
      sortList.classList.toggle('hidden');
      sortButton.classList.toggle('clicked');
      if(sortList.classList.contains('hidden')){
        sortButton.setAttribute('aria-expanded', 'false');
      } else {
        sortButton.setAttribute('aria-expanded', 'true');
      }
  }

  //fonction pour fermer la liste de tri
  function closeSortList() {
    sortList.classList.add('hidden');
    sortButton.setAttribute('aria-expanded', 'false');
    sortButton.classList.remove('clicked');
  }

  //affiche la liste de tri au clic sur le bouton
  sortButton.addEventListener('click', () => {
    showSortList();
  })

  sortOption.forEach(option => {
    option.addEventListener('click', (e) => {

      mediaGallery.innerHTML = "";

      for (let option of sortOption) {
        option.classList.remove('focused');
        option.setAttribute("aria-selected", "false");
      }

      e.target.classList.add('focused');
      e.target.setAttribute("aria-selected", "true");
      sortButton.innerText = e.target.innerText;
      sortList.setAttribute("aria-activedescendant", e.target.id); 

      let sortValue = e.target.innerText;
      switch (sortValue) {
        case 'Titre' :
          sortByTitle();
          break;
        case 'Popularité' :
          sortByLikes();
          break;
        case 'Date' :
          sortByDate();
          break;
        }

      closeSortList();

      medias.forEach((media) => {
        
        const galleryModel = mediaFactory(media);
        const mediaCardDOM = galleryModel.getMediaCardDOM();
        mediaGallery.appendChild(mediaCardDOM);
      }); 
    })
  })

  sortOption.forEach(option => {
    option.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        mediaGallery.innerHTML = "";

        for (let option of sortOption) {
          option.classList.remove('focused');
          option.setAttribute("aria-selected", "false");
        }

        e.target.classList.add('focused');
        e.target.setAttribute("aria-selected", "true");
        sortButton.innerText = e.target.innerText;
        sortList.setAttribute("aria-activedescendant", e.target.id); 

        let sortValue = e.target.innerText;
        switch (sortValue) {
          case 'Titre' :
            sortByTitle();
            break;
          case 'Popularité' :
            sortByLikes();
            break;
          case 'Date' :
            sortByDate();
            break;
          }

        closeSortList();

        medias.forEach((media) => {
          
          const galleryModel = mediaFactory(media);
          const mediaCardDOM = galleryModel.getMediaCardDOM();
          mediaGallery.appendChild(mediaCardDOM);
        });
      }
    })
  })

  function sortByTitle() {
    medias.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
  }

  function sortByLikes() {
    medias.sort((a, b) => b.likes - a.likes);
  }

  function sortByDate() {
    medias.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  }
}