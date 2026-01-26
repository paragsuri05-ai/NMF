const cards=document.querySelectorAll('.card');

window.addEventListener('scroll',()=>{
cards.forEach(c=>{
if(c.getBoundingClientRect().top < window.innerHeight-80){
c.classList.add('show');
}
});
});
