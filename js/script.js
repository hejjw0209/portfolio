document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const title1 = document.querySelector("#intro h1");

    // 글자만 자르고 끝!
    const text = new SplitType(title1, { types: "chars" });
    // console.log(text.chars);

    gsap.from(text.chars, {
        y: 50,
        opacity: 0,
        ease: "bounce.in",
        stagger: 0.1, // 같은 대상에 주는 순차적인 애니메이션 효과
        duration: 1.5,
        repeat: -1, // 무한 반복
        yoyo: true, // 애니메이션을 앞뒤로 반복
    });

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
        slidesPerView: 5,
        // centeredSlides: true,
        spaceBetween: 20,
        // pagination: {
        //     el: ".sns-slider .swiper-pagination",
        //     clickable: true, // 클릭가능
        // },
    });

    // #potfolio .inner
    const portfolioBoxes = gsap.utils.toArray("#potfolio .inner");
    // console.log(portfolioBoxes);

    portfolioBoxes.forEach((box, index) => {
        const tl = gsap.timeline({
            defaults: { duration: 1, ease: "power2.out()" },
            scrollTrigger: {
                trigger: box,
                start: "top 15%",
                end: "bottom 0%",
                // markers: true,
                pin: true,
                // toggleActions: "play none reverse none",
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

    const char = document.querySelector(".character");
    // const hair = document.querySelector(".hair2");

    let isMoved = false; // 이동 여부를 저장하는 변수

    char.addEventListener("click", () => {
        if (!isMoved) {
            gsap.to(char, { x: 200, y: 200, rotation: -45 });
        } else {
            gsap.to(char, { x: 0, y: 0, rotation: -45 });
        }
        setTimeout(shaking, 800);
        isMoved = !isMoved; // 상태 변경
    });

    shaking();

    function shaking() {
        char.classList.add("active");
        setTimeout(() => {
            char.classList.remove("active");
        }, 1000);
    }

    gsap.timeline({
        scrollTrigger: {
            trigger: "#footer",
            // markers: true,
            start: "top 80%",
            // pin: true,
            toggleActions: "play none none reverse",
            toggleClass: { targets: ".character", className: "active" },
        },
    })
        .to(char, {
            xPercent: -100,
            rotation: 0,
        })
        .to(".foot-info h4", { x: 400 }, "<")
        .to(".foot-info p:first-child", { x: 400 }, "-=0.3")
        .to(".foot-info p:last-child", { x: 400 }, "-=0.3");

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
