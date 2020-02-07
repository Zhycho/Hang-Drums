$(document).ready(function () { 

    // Слайдере в баннере на главной
    $('.js--main-bunner__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        swipe: false,
        prevArrow: $('.js--main-bunner__slider-nav-prev'),
        nextArrow: $('.js--main-bunner__slider-nav-next'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    swipe: true,
                }
            }
        ]
    });

    // Слайдере в баннере на главной
    $('.js--products-block-list__slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        swipe: false,
        prevArrow: $('.js--products-block-list__slider-nav-prev'),
        nextArrow: $('.js--products-block-list__slider-nav-next'),
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    swipe: true,
                }
            }
        ]
    });

    // helpful-info slider
    $('.js--helpful-information-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        swipe: false,
        prevArrow: $('.js--helpful-information__slider-nav-prev'),
        nextArrow: $('.js--helpful-information__slider-nav-next'),
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: 'unslick'
            }
        ]
    });

    // faq-block 
    $(document).on('click','.faq-block-list__item a',function(){
        $(this).parent().siblings().children().removeClass('active');
        $(this).toggleClass('active');
    });
});