console.log('Hello, world!');

let lastScrollTop = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scroll hacia abajo  oculta el header
    header.style.top = "-100px"; 
  } else {
    // Scroll hacia arriba mostra el header
    header.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
