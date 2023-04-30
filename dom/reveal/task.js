const revealElems = document.querySelectorAll('.reveal');

function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function revealOnScroll() {
  revealElems.forEach(elem => {
    if (isInViewport(elem)) {
      elem.classList.add('reveal_active');
    } else {
      elem.classList.remove('reveal_active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

    // setInterval(() =>{
    //     let revevalisActive = revevalis.getBoundingClientRect()
    //     console.log(revevalisActive)
    // },1000)