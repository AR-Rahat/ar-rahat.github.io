let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
//console.log(navLinks)

window.onscroll = ()=>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    //console.log(id);
    if(top>=offset && top < offset + height){
      navLinks.forEach(links =>{
        //console.log(links)
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  let header = document.querySelector('header')

  header.classList.toggle('sticky',window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

ScrollReveal({
   reset: true,
   distance:'80px',
   duration: 2000,
   delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Mern Stack Developer','Android App Developer','Competitive Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const showButton = document.getElementById('readmore');
const favDialog = document.getElementById('favDialog');
const okb = document.getElementById('okbtn');
showButton.addEventListener('click', () => {
  favDialog.showModal();
});
okb.addEventListener('click', () => {
  favDialog.close();
});

const showButton2 = document.getElementById('readmore2');
const favDialog2 = document.getElementById('favDialog2');
const okb2 = document.getElementById('okbtn2');
showButton2.addEventListener('click', () => {
  favDialog2.showModal();
});
okb2.addEventListener('click', () => {
  favDialog2.close();
});

const showButton3 = document.getElementById('readmore3');
const favDialog3 = document.getElementById('favDialog3');
const okb3 = document.getElementById('okbtn3');
showButton3.addEventListener('click', () => {
  favDialog3.showModal();
});
okb3.addEventListener('click', () => {
  favDialog3.close();
});

const showButton0 = document.getElementById('abtreadmore');
const favDialog0 = document.getElementById('aboutdialog');
const okb0 = document.getElementById('okbtn0');
showButton0.addEventListener('click', () => {
  favDialog0.showModal();
});
okb0.addEventListener('click', () => {
  favDialog0.close();
});