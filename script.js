/* Scroll reveal */
const reveals=document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{
reveals.forEach(r=>{
if(r.getBoundingClientRect().top<window.innerHeight-80){
r.classList.add('show');
}
});
});

/* Testimonials slider */
const slides=document.querySelectorAll('.slide');
let i=0;

setInterval(()=>{
slides[i].classList.remove('active');
i=(i+1)%slides.length;
slides[i].classList.add('active');
},3000);
