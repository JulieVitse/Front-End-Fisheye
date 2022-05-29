const dropdownIcon = () => {
    const dropdown = document.createElement('i');
    dropdown.className = "fa-solid fa-angle-down sort-arrow";
    return dropdown;
  }
  
  
  const selectOptions = [{
      id: 1,
      name: 'Popularité',
    },
    {
      id: 2,
      name: 'Date',
    },
    {
      id: 3,
      name: 'Titre',
    }
  ]
  
  const sortButton = document.querySelector("#sort-media");
  
  const dropdown = () => {
  
    const input = createInput();
    const dropdown = showDropdown();
  
    sortButton.appendChild(input);
    sortButton.appendChild(dropdown);
  };
  
  const createInput = () => {
    // Creates the input outline
    const input = document.createElement("div");
    input.classList = "input";
    input.addEventListener("click", toggleDropdown);

    const placeholder = document.createElement('p');
    placeholder.className = 'placeholder';
    placeholder.textContent = "Popularité";

    placeholder.appendChild(dropdownIcon());
    input.appendChild(placeholder);
  
    return input;
  };
  
  const showDropdown = () => {
    const selectList = document.createElement("div");
    selectList.classList.add("select-list", "hide");
  
    selectOptions.forEach(select => {
      const {
        id,
        name,
      } = select;
      const option = document.createElement("p");
      option.addEventListener("click", () => selectOption(name));
      option.setAttribute("id", id);
  
      option.textContent = name;
      
      selectList.appendChild(option);
    });
    return selectList;
  };
  
  const toggleDropdown = () => {
    const dropdown = document.querySelector(".select-list");
    dropdown.classList.toggle("hide");
  
    const input = document.querySelector(".input");
    input.classList.toggle("input__active");
  };
  
  const selectOption = (name) => {
    const text = document.querySelector('.placeholder');
    text.textContent = name;
    text.classList.add('input__selected');
    text.appendChild(dropdownIcon());
    toggleDropdown();
  };
  
  dropdown();