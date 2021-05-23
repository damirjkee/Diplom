const menuBtn = document.querySelector('.mobile_btn');
const menu = document.querySelector('.mobile_menu');
let heightBurger = document.querySelector('.header_nav');

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    heightBurger.classList.toggle('active');
});