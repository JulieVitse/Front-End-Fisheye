const sortButton = document.getElementById('sort-media-btn');
const sortList = document.getElementById('sort-list');
const sortOption = document.querySelectorAll('li');

function showSortList() {
    sortList.classList.remove('hidden');
    sortButton.setAttribute('aria-expanded', 'true');
    //sortList.sortListNode.focus();
}

function closeSortList() {
  sortList.classList.add('hidden');
  sortButton.setAttribute('aria-expanded', 'false');
  //sortList.sortListNode.focus();
}

sortButton.addEventListener('click', function (){
  showSortList();
})


/* sortOption.forEach(option => {
  option.addEventListener('click', () => {
    isSelected(option);
  })
})

function isSelected(element) {
  element.classList.add('focused');
  element.setAttribute('aria-selected', 'true');
  sortButton.innerText = element.innerText;
}

function unselect(element) {
  if(element.nextElementSibling != null || element.previousElementSibling != null){
  element.nextElementSibling.classList.remove('focused');
  element.nextElementSibling.setAttribute('aria-selected', 'false');
  element.previousElementSibling.classList.remove('focused');
  element.previousElementSibling.setAttribute('aria-selected', 'false');
  }
} */