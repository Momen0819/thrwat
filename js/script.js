/*global $,owl,smoothScroll,WOW*/
$(document).ready(function () {
    "use strict";

    /* ---------------------------------------------
     Loader Screen
    --------------------------------------------- */
    $(window).load(function () {
        $("body").css('overflow-y', 'auto');
        $('#loading').fadeOut(4000);
    });


    //for smoth scroll
    smoothScroll.init({
        speed: 800,
        updateURL: false,
        offset: 85
    });

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true,
        offset: 0,
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();

    /* ---------------------------------------------
     Sliders
    --------------------------------------------- */
    $(".h-slider").owlCarousel({
        transitionStyle: "fadeUp",
        navigation: true,
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: false,
        pagination: false,
        stopOnHover: false,
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"]
    });
    $(".q-slider").owlCarousel({
        //        transitionStyle: "fadeUp",
        navigation: false,
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: 4000,
        pagination: false,
        stopOnHover: false
    });

    $(".g-slider").owlCarousel({
        navigation: false,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 4000,
        items: 3,
        mouseDrag: true,
        pagination: true,
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 2],
            [800, 2],
			[1000, 2],
			[1200, 3],
			[1400, 3],
			[1600, 4]
        ]
    });

    $(".nw-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 4000,
        items: 3,
        mouseDrag: true,
        pagination: true,
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"],
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 2],
            [800, 2],
			[1000, 3],
			[1200, 3],
			[1400, 3],
			[1600, 4]
        ]
    });

    $(".serv-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 6000,
        items: 3,
        mouseDrag: true,
        pagination: false,
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"],
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 2],
            [800, 2],
			[1000, 3],
			[1200, 3],
			[1400, 3],
			[1600, 4]
        ],
        stopOnHover: true
    });

    $(".cl-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 4000,
        items: 5,
        mouseDrag: true,
        pagination: true,
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 2],
			[700, 3],
            [800, 4],
			[1000, 4],
			[1200, 5],
			[1400, 5],
			[1600, 6]
        ],
        navigationText: ["<span class='slider-left'><i class='fa fa-angle-left'></i></span>", "<span class='slider-right'><i class='fa fa-angle-right'></i></span>"]
    });

    /* ---------------------------------------------
     Scrool To Top Button Function
    --------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".toTop").css("right", "20px");
        } else {
            $(".toTop").css("right", "-60px");
        }
    });

    $(".toTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    //customize the header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.main-head').addClass('sticky');
        } else {
            $('.main-head').removeClass('sticky');
        }
    });

    $('.side-nav').mCustomScrollbar({
        autoHideScrollbar: false,
        setTop: 0,
        scrollInertia: 50,
        theme: "light-1"
    });

    $('.open-sidebar').on('click', function () {
        $('.sidebar').toggleClass('opened');
        $('.overlay_gen').fadeIn();
        $('body').addClass('sided');
    });

    $('.overlay_gen').on('click', function () {
        $('.sidebar').toggleClass('opened');
        $('.overlay_gen').fadeOut();
        $('body').removeClass('sided');
    });

    //    var head_h = $('.main-head').innerHeight();
    //
    //    $('.hero-s .item').css({
    //        paddingTop: head_h + 100,
    //        paddingBottom: '260px'
    //    });

    $('.op-vid').click(function () {
        $('.video-s .video-inner .v-img').addClass("hosted");
    });

    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            maxWidth: 800,
            maxHeight: 600,
            fitToView: false,
            width: '70%',
            height: '70%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none'
        });
    }

    $('.open-search').click(function () {
        $('.search-area').slideToggle();
    });

    $('.open-search, .search-area').on("click", function (e) {
        e.stopPropagation();
    });

    $('body').click(function () {
        $(this).find('.search-area').slideUp();
    });

});