let dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  let dropdownValue = dropdown.querySelector('.dropdown__value');
  let dropdownList = dropdown.querySelector('.dropdown__list');
  let dropdownItems = dropdown.querySelectorAll('.dropdown__item');
  
  dropdownValue.addEventListener('click', event => {
    dropdownList.classList.toggle('dropdown__list_active');
  });

  dropdownItems.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      dropdownList.classList.remove('dropdown__list_active');
      dropdownValue.textContent = item.querySelector('.dropdown__link').textContent;
    });
  });
});
