$(document).ready(function(){
    $('.novelty-items').slick({
        slidesToShow: 4,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 1242,
                settings: {
                    slidesToShow: 3,
                }       
            },{
                breakpoint: 934,
                settings: {
                    slidesToShow: 2,
                } 
            },{
                breakpoint: 625,
                settings: {
                    slidesToShow: 1,
                    }          
            }
        ]
    });
    $('.').slick({
        arrows: false,
        slidesToShow: 1,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    });
});