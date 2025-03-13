document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const title1 = document.querySelector("#intro h1");

    // 글자만 자르고 끝!
    const text = new SplitType(title1, { types: "chars" });
    console.log(text.chars);

    gsap.from(text.chars, {
        y: 50,
        opacity: 0,
        ease: "bounce.in",
        stagger: 0.1, // 같은 대상에 주는 순차적인 애니메이션 효과
        duration: 1.5,
        repeat: -1, // 무한 반복
        yoyo: true, // 애니메이션을 앞뒤로 반복
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const webSlider = new Swiper(".web-slider", {
        loop: true,
        // autoplay: true,
        slidesPerView: 1,
        spaceBetween: 10,
        // If we need pagination
        pagination: {
            el: ".web-slider-wrap .swiper-pagination",
            clickable: true, // 클릭가능
        },
        // Navigation arrows
        navigation: {
            nextEl: ".web-slider-wrap .swiper-button-next",
            prevEl: ".web-slider-wrap .swiper-button-prev",
        },

        on: {
            slideChange: function () {
                // console.log(this.realIndex);

                const liEl = document.querySelectorAll(".info-list1 li");
                liEl.forEach((li) => {
                    li.classList.remove("active");
                    liEl[this.realIndex].classList.add("active");
                });
            },
        },
    });
    const detailSlider = new Swiper(".detail-slider", {
        loop: true,
        // autoplay: true,
        slidesPerView: 1,
        spaceBetween: 10,
        // If we need pagination
        pagination: {
            el: ".detail-slider-wrap .swiper-pagination",
            clickable: true, // 클릭가능
        },
        // Navigation arrows
        navigation: {
            nextEl: ".detail-slider-wrap .swiper-button-next",
            prevEl: ".detail-slider-wrap .swiper-button-prev",
        },

        on: {
            slideChange: function () {
                // console.log(this.realIndex);

                const liEl = document.querySelectorAll(".info-list2 li");
                liEl.forEach((li) => {
                    li.classList.remove("active");
                    liEl[this.realIndex].classList.add("active");
                });
            },
        },
    });
    const promoSlider = new Swiper(".promotion-slider", {
        loop: true,
        // autoplay: true,
        slidesPerView: 1,
        spaceBetween: 10,
        // If we need pagination
        pagination: {
            el: ".promotion-slider-wrap .swiper-pagination",
            clickable: true, // 클릭가능
        },
        // Navigation arrows
        navigation: {
            nextEl: ".promotion-slider-wrap .swiper-button-next",
            prevEl: ".promotion-slider-wrap .swiper-button-prev",
        },

        on: {
            slideChange: function () {
                // console.log(this.realIndex);

                const liEl = document.querySelectorAll(".info-list3 li");
                liEl.forEach((li) => {
                    li.classList.remove("active");
                    liEl[this.realIndex].classList.add("active");
                });
            },
        },
    });
    const illSlider = new Swiper(".ill-slider", {
        loop: true,
        // autoplay: true,
        slidesPerView: 1,
        spaceBetween: 10,
        // If we need pagination
        pagination: {
            el: ".ill-slider-wrap .swiper-pagination",
            clickable: true, // 클릭가능
        },
        // Navigation arrows
        navigation: {
            nextEl: ".ill-slider-wrap .swiper-button-next",
            prevEl: ".ill-slider-wrap .swiper-button-prev",
        },

        on: {
            slideChange: function () {
                // console.log(this.realIndex);

                const liEl = document.querySelectorAll(".info-list4 li");
                liEl.forEach((li) => {
                    li.classList.remove("active");
                    liEl[this.realIndex].classList.add("active");
                });
            },
        },
    });

    const snsSlider = new Swiper(".sns-slider", {
        loop: true,
        autoplay: true,
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 10,
        // pagination: {
        //     el: ".sns-slider .swiper-pagination",
        //     clickable: true, // 클릭가능
        // },
    });

    // #potfolio .inner
    const portfolioBoxes = gsap.utils.toArray("#potfolio .inner");
    console.log(portfolioBoxes);

    portfolioBoxes.forEach((box, index) => {
        const tl = gsap.timeline({
            defaults: { duration: 1, ease: "power2.out()" },
            scrollTrigger: {
                trigger: box,
                start: "top 30%",
                end: "bottom 0%",
                // markers: true,
                pin: true,
                toggleActions: "play none reverse none",
            },
        });
        tl.from(box, {
            width: "100%",
            height: "100vh",
            borderRadius: 0,
        });

        tl.from(
            box.querySelector(".wrap"),
            {
                autoAlpha: 0,
                scale: 1.2,
            },
            "<"
        );
    });

    // 초기화
    $("#fullpage").fullpage({
        // 인디케이터 커스텀

        // 1. 사용할 요소의 이름을 지정
        menu: ".indicator",

        // 2. 앵커(영역)의 이름을 설정
        anchors: ["section1", "section2", "section3", "section4", "section5", "section6"],

        // 3. 실제 사용될 링크에 data-menuanchor="영역이름" 적용

        // * 속도 조절
        scrollingSpeed: 1000,

        // * 섹션 영역에서 콘텐츠 세로 정렬(상단 기준)
        verticalCentered: false,

        // * 슬라이더 관련 설정
        slidesNavigation: true,

        // 영역에 진입한 후
        afterLoad: function (anchorLink, index) {
            console.log("영역에 진입한 후 : " + anchorLink, index);

            // section4 영역에 진입하면 탑버튼이 보이게
            if (anchorLink === "section5") $btnTop.fadeIn();

            // 초기화
            AOS.init();
            // console.log($aniEl);
            $aniEl.addClass("aos-animate");
        },

        // 영역을 떠나갈 때
        onLeave: function (index, nextIndex, direction) {
            console.log("영역을 떠나갈 때 : " + index, nextIndex, direction);

            //section4 영역을 떠나거나 휠을 올렸을 때

            if (direction === "up") $btnTop.fadeOut();

            if (direction === "down") {
                $header.addClass("hide");
            } else {
                $header.removeClass("hide");
            }

            // aos-animate 클래스가 없으면 애니메이션 동작 X
            $aniEl.removeClass("aos-animate");
        },
    });

    const star1 = document.querySelector(".star1");

    function animateStar1() {
        star1.animate([{ transform: "scale(1)" }, { transform: "scale(0.5)" }, { transform: "scale(1)" }], {
            duration: 2000,
            iterations: Infinity,
        });
    }
    const star2 = document.querySelector(".star2");

    function animateStar2() {
        star2.animate([{ transform: "scale(0.2)" }, { transform: "scale(0.5)" }, { transform: "scale(0.2)" }], {
            duration: 2000,
            iterations: Infinity,
        });
    }

    // Initialize Lenis
    const lenis = new Lenis();

    animateStar1();
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    animateStar2();
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
});
