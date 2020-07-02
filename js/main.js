(function($){
    "use strict";


    $(window).on('load', function() {
        if($(".pre-loader").length > 0) {
            $(".pre-loader").fadeOut("slow");
        }
    })


    // // One Page Nave 
    // $('#my-nav').onePageNav({
    //     currentClass: 'current',
    //     changeHash: false,
    //     scrollSpeed: 750,
    //     scrollThreshold: 0.5,
    //     filter: '',
    //     easing: 'swing',
    //     begin: function() {
    //         //I get fired when the animation is starting
    //     },
    //     end: function() {
    //         //I get fired when the animation is ending
    //     },
    //     scrollChange: function($currentListItem) {
    //         //I get fired when you enter a section and I pass the list item of the section
    //     }
    // });


    // Mean Menu 
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanDisplay:"block"
    });

    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function(){
        var scroll = wind.scrollTop();
        if(scroll < 100) {
            sticky.removeClass('sticky');
        }else{
            sticky.addClass('sticky');
        }
    });

    // data background 
    $("[data-background]").each(function(){
        $(this).css("background-image", "url("+ $(this).attr("data-background")+")")
    })

    // Counter Up 
    $('.counter').counterUp({
        dalay:10,
        time:1000
    })

    // Magnigic PopUp
    $(".popup-video").magnificPopup({
        type: 'iframe'
    });

    // Slick Slider 
    $(".testimonial-active").slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        fade:true,
        asNavFor:'.test-img-active'
    });
    $(".test-img-active").slick({
        slidesToShow:3,
        slidesToScroll:1,
        asNavFor:'.testimonial-active',
        dots:false,
        centerMode:true,
        focusOnSelect:true,
        centerPadding:'0px',
        arrows:true,
        autoplay:true,
        responsive:[
            {
                breakpoint:768,
                setting:{
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }
        ]
    });

    // Owl Carousel 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:2
            },
            767:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });



})(jQuery);