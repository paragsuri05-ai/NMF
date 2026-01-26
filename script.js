const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
 cards.forEach(c => {
   if (c.getBoundingClientRect().top < window.innerHeight - 100) {
     c.classList.add('show');
   }
 });
});
