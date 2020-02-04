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
                breakpoint: 480,
                settings: {
                    swipe: true,
                }
            }
        ]
    });

    // faq-block 
    $(document).on('click','.faq-block-list__item a',function(){
        $(this).parent().siblings().children().removeClass('active');
        $(this).toggleClass('active');
    });
});