let prev = document.querySelector('.slider__arrow_prev');
let next = document.querySelector('.slider__arrow_next');
let sliderItems = document.querySelectorAll('.slider__item');
let counter = 0;

let sliderItemsArray = Array.from(sliderItems);

prev.addEventListener('click', event => {
    sliderItemsArray[counter].classList.remove('slider__item_active');
    counter--;

    if (counter < 0) {
        counter = sliderItemsArray.length - 1;
    }

    sliderItemsArray[counter].classList.add('slider__item_active');
});

next.addEventListener('click', event => {
    sliderItemsArray[counter].classList.remove('slider__item_active');
    counter++;

    if (counter >= sliderItemsArray.length) {
        counter = 0;
    }

    sliderItemsArray[counter].classList.add('slider__item_active');
});