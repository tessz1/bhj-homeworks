let menuLinks = document.querySelectorAll('.menu__link');

Array.from(menuLinks).forEach(link => {
  link.addEventListener('click', event => {
    let currentLink = event.target;
    let parentLi = currentLink.parentElement;
    let menu = parentLi.querySelector('.menu');
    if (menu) {
      event.preventDefault();
      menu.classList.toggle('menu_active');
    }
  });
});

