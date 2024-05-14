const openBurgerBtn = document.querySelector(".burger__btn_open");
const burgerPopup = document.querySelector(".burger__menu");
const header = document.querySelector(".header");
const closeBtn = document.querySelector(".burger__btn_closes");

openBurgerBtn.addEventListener('click', () => {
    burgerPopup.style.width = '100%';
})

closeBtn.addEventListener('click', () => {
    burgerPopup.style.width = '0';
})