$(document).ready(function(){
    $('.novelty-items').slick({
        slidesToShow: 4,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                }       
            },{
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                }       
            }
        ]
    });
    $('.header-slider').slick({
        arrows: false,
        slidesToShow: 1,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    });
});