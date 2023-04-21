let tabs = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        document.querySelector('.tab_active').classList.remove('tab_active');
        document.querySelector('.tab__content_active').classList.remove('tab__content_active');
        tab.classList.add('tab_active');
        tabContents[i].classList.add('tab__content_active');
    });
});


