const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('.menu__open__btn');
const closeBtn = document.querySelector('.menu__close__btn');

// open nav menu
openBtn.addEventListener('click', () => {
    openBtn.style.display = "none";
    menu.classList.add('active');
    closeBtn.style.display = "block";
})

// close nav menu
closeBtn.addEventListener('click', () => {
    closeBtn.style.display = "none";
    menu.classList.remove('active');
    openBtn.style.display = "block";
})