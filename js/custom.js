$(function () {


    // 스크롤 시 헤더 
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 100) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }
    });

    // 사이즈
    var mql = window.matchMedia("screen and (max-width: 768px)");
    // 메뉴에 마우스가면 헤더 하얗게 만들기
    $('.gnb').hover(

        function () {

            $('.header').css('background', 'rgba( 255, 255, 255, 1)');
        },

        function () {

            // 사이즈 768이하면
            if (mql.matches) {

                $('.header').css('background', 'rgba( 255, 255, 255, 1)');

            } else {
                // 만약 헤더가 on을 가지고 있으면 그냥 하얗게 내버려둬라 -꼮대기있을때는 투명하지만 만지면 하얗게되어야한다
                if ($(".header").hasClass("on")) {
                    $('.header').css('background', 'rgba( 255, 255, 255, 1)');

                    $(window).on('scroll', function () {
                        let sct = $(window).scrollTop();
                        if (sct < 100) {
                            $('.header').css("background", "rgba( 255, 255, 255, 0)");
                            return;
                        } else {
                            $('.header').css('background', 'rgba( 255, 255, 255, 1)');
                            return;
                        }

                    });

                } else { $('.header').css("background", "rgba( 255, 255, 255, 0)"); }

            }
        });






    // 스크롤 시 애니메이션 효과
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._sec_scroll').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        })
    })


    //스크롤바
    const SwiperScroll = new Swiper(".sub_slide", {
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 5,
        centeredSlides: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        pagination: {
            el: ".sub_scrollbar",
            type: "progressbar",
        },

        speed: 1000,
        slideToClickedSlide: true,
        on: {

            slideChangeTransitionEnd: function () {
                const realIndex = SwiperScroll.realIndex;
                console.log(realIndex);

                if (realIndex >= 5)

                    SwiperScroll.slideTo(0, 2000);


            }
        }

    });

    // 다음에 더 발전시켜보기로 ㅠ.ㅠ
    // 스와이퍼 메인 슬라이드
    const MainSlide = new Swiper('.main_slide', {
        effect: 'fade',
        slidesPerView: 1,
        pagination: {
            el: '.pagination_fraction',
            type: 'fraction'
        },

        loop: true,
        loopedSlides: 1,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        speed: 100,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },


    });

    MainSlide.controller.control = SwiperScroll;
    SwiperScroll.controller.control = MainSlide;



    // 브랜드 탭
    $('.main_brand .tab_link li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');

        $('.tab_brand .tab_content').eq(idx).addClass('on').siblings().removeClass('on');

        console.log(event, event.target, event.currentTarget, $(this), $(this).index());

    });

    // 브랜드 뉴 슬라이드,
    const NewBrandSlide = new Swiper('.new_tab', {
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        spaceBetween: 0,
        centeredSlides: true,

        speed: 700,
        pagination: {
            el: ".brand_progressbar",
            type: "progressbar",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 5,
                spaceBetween: 10,
            }

        }

    });



    $('.new_tab .arrows .left').on('click', function () {
        NewBrandSlide.slidePrev();
    });
    $('.main_brand .arrows .right').on('click', function () {
        NewBrandSlide.slideNext();
    });

    // 브랜드 베스트 슬라이드
    const BestBrandSlide = new Swiper('.best_tab', {
        loop: true,
        loopAdditionalSlides: 2,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        spaceBetween: 10,
        centeredSlides: true,

        speed: 700,
        pagination: {
            el: ".brand_progressbar",
            type: "progressbar",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 5,
                spaceBetween: 10,
            }

        }
    });



    $('.best_tab .arrows .left').on('click', function () {
        BestBrandSlide.slidePrev();
    });
    $('.best_tab .arrows .right').on('click', function () {
        BestBrandSlide.slideNext();
    });



    // 지점 스와이퍼
    const branchSwiper = new Swiper('.main_branch .branch_slider', {
        effect: 'fade',
        loop: true,
        speed: 600,
        loopAdditionalSlides: 1,
        allowTouchMove: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    // 미디어 동영상 스와이퍼
    const mediaVideoSwiper = new Swiper('.media_slider_video', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopAdditionalSlides: 1,
        pagination: {
            el: '.media_progressbar',
            type: 'progressbar',
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
            }

        }
    });
    $('.media_slider_video .arrows .left').on('click', function () {
        mediaVideoSwiper.slidePrev();
    });
    $('.media_slider_video .arrows .right').on('click', function () {
        mediaVideoSwiper.slideNext();
    });

    // 미디어 이미지 스와이퍼
    const mediaPhotoSwiper = new Swiper('.media_slider_photo', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopAdditionalSlides: 1,
        pagination: {
            el: '.media_progressbar',
            type: 'progressbar',
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 30,
            }

        }
    });
    $('.media_slider_photo .arrows .left').on('click', function () {
        mediaPhotoSwiper.slidePrev();
    });
    $('.media_slider_photo .arrows .right').on('click', function () {
        mediaPhotoSwiper.slideNext();
    });



    // 미디어 탭
    $('.main_media .tab_link li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');

        $('.media_slider').eq(idx).addClass('on').siblings().removeClass('on');

        console.log(event, event.target, event.currentTarget, $(this), $(this).index());

    });




    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
        }

        $(this).next().stop().slideDown();
        $(this).parent().siblings().find('.sub_menu').stop().slideUp();
    });

    $(window).on('resize', function () {
        $('.gnb .sub_menu').removeAttr('style')
    })

























})