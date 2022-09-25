var swiper = new Swiper('.image-slider',{
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    //         navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    // },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true
    // },
    simulateTouch: true,
    touchRatio: 2,
    grabCurser: true,
    // mousewheel:{
    //     sensitivity:1,
    // },
    loop: true,
    loopedSlides: 1,
    keyboard:{
        enabled:true,
        onlyInViewport:true
    },
    // spaceBetween: 40,
    slideToClickedSlide: true,
    // effect:'flip',
    // flipeEffect:{
    //     slideShadows:true,
    //     limitRotation:true
    // },
    effect:'fade',
    fadeEffect:{
        crossFade:true
    },

});