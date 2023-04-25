let modalClosed = document.querySelectorAll('.modal__close');
let modalMain = document.querySelector('#modal_main');
let success = document.querySelector('.show-success')
let modalSuccess = document.querySelector('#modal_success');

document.addEventListener('DOMContentLoaded', function() {
  modalMain.classList.add('modal_active');
});


  success.addEventListener('click', function() {
    modalSuccess.classList.toggle('modal_active');
    modalMain.classList.remove('modal_active');
  });

 

modalClosed.forEach(function(modalClosed) {
  modalClosed.addEventListener('click', function() {
    let modal = modalClosed.closest('.modal');
    if (modal) {
      modal.classList.remove('modal_active');
    }
  });
});
