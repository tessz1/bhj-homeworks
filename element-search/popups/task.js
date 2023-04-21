let modalClosed = document.querySelector('.modal__close');
let modalMain = document.querySelector('#modal_main');
let success = document.querySelector('.show-success')
let modalSuccess = document.querySelector('#modal_success');

document.addEventListener('DOMContentLoaded', function() {
  modalMain.classList.add('modal_active');
});


  success.addEventListener('click', function() {
    modalSuccess.classList.add('modal_active');
  });


modalClosed.addEventListener('click', event =>  {
  modalMain.classList.remove('modal_active')
});


