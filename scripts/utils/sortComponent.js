const sortButton = document.getElementById('sort-media-btn');
const sortList = document.getElementById('sort-list');
const sortOption = document.querySelectorAll('li');

function showSortList() {
    sortList.classList.toggle('hidden');
    //sortButton.setAttribute('aria-expanded', 'true');
    sortButton.classList.toggle('clicked');
    if(sortList.classList.contains('hidden')){
      sortButton.setAttribute('aria-expanded', 'false');
    } else {
      sortButton.setAttribute('aria-expanded', 'true');
    }
    //sortList.sortListNode.focus();
}

function closeSortList() {
  sortList.classList.add('hidden');
  sortButton.setAttribute('aria-expanded', 'false');
  sortButton.classList.remove('clicked');
  //sortList.sortListNode.focus();
}

sortButton.addEventListener('click', () => {
  showSortList();
})

sortOption.forEach(option => {
  option.addEventListener('click', (e) => {
    for (let option of sortOption) {
      option.classList.remove('focused');
      option.setAttribute("aria-selected", "false");
    }
    e.target.classList.add('focused');
    e.target.setAttribute("aria-selected", "true");
    sortButton.innerText = e.target.innerText;
    sortList.setAttribute("aria-activedescendant", e.target.id)
    closeSortList();
  })
})
