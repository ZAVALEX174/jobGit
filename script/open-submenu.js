const submenuBtn = document.querySelector('.submenu');
const backDropMenu = document.querySelector('.submenu__list');
const headerContainer = document.querySelector('.header__container');
const headerMenu = document.querySelector('.header__menu');
const visHidden = document.querySelector('.visually-hidden')
console.log(visHidden)

submenuBtn.addEventListener('mouseover', () => {
    backDropMenu.classList.remove('visually-hidden');
    // backDropMenu.style.display = 'flex';
    // backDropMenu.style.bottom = '-270px';
    // headerContainer.classList.remove('header__container');
    headerContainer.classList.add('header__container_rectangle');
    // headerContainer.style.borderRadius = '20px 20px 0 0';
    // headerContainer.style.borderRadius = '0';
})

headerMenu.addEventListener('mouseleave', () => {
    backDropMenu.classList.add('visually-hidden');
    // backDropMenu.style.display = 'none';
    headerContainer.classList.remove('header__container_rectangle');
    // headerContainer.classList.add('header__container');
    // headerContainer.style.borderRadius = '20px';
    // backDropMenu.style.bottom = '0';

})