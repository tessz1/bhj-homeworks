let ads = Array.from(document.querySelectorAll('.rotator__case'));
let currentIndex = 0;

setInterval(function() {
  ads.forEach((el, index) => {
    el.classList.remove('rotator__case_active');
    if (index === currentIndex) {
      el.classList.add('rotator__case_active');
    }
  });
  
  currentIndex++;
  if (currentIndex >= ads.length) {
    currentIndex = 0;
  }
}, 1000);
