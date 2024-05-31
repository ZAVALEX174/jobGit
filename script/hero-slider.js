
const heroSlider = new Swiper('.swiper-hero', {
    loop: true,
    speed: 1500,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: false,
        clickable: true,
    },
    navigation: {
        nextEl: '.btn__slider_next',
        prevEl: '.btn__slider_prev',
    },
}
);

