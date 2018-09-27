var mySwiper = new Swiper ('.swiper-container', {
    spaceBetween: 10,
    allowTouchMove: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

new FrostSlider.default('second-slider', {
    navArrowPrev: '<img src="images/arrow_left.png" class="frost__ctrl-icon" />',
    navArrowNext: '<img src="images/arrow_right.png" class="frost__ctrl-icon" />'
});

new FrostSlider.default('third-slider', {
    navArrowPrev: '<img src="images/arrow_left.png" class="frost__ctrl-icon" />',
    navArrowNext: '<img src="images/arrow_right.png" class="frost__ctrl-icon" />'
});