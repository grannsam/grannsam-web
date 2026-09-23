window.onload = function () {

    const menuToggle = document.getElementById("menu-toggle")
    const menu = document.getElementById("menu")

    let isMenuOpen = false;

    const closeMenu = () => {
        menu.classList.add("max-h-0", "overflow-hidden", "opacity-0", "invisible")
        menu.classList.remove("max-h-[300px]", "overflow-auto", "opacity-100", "visible")
        isMenuOpen = false
    }

    menuToggle.addEventListener("click", () => {
        if (isMenuOpen) {
            closeMenu()
        }
        else {
            menu.classList.remove("max-h-0", "overflow-hidden", "opacity-0", "invisible")
            menu.classList.add("max-h-[300px]", "overflow-auto", "opacity-100", "visible")
            isMenuOpen = true
        }
    })

    document.addEventListener("click", (event) => {
        if (!isMenuOpen) return
        if (menu.contains(event.target) || menuToggle.contains(event.target)) return
        closeMenu()
    })

    const header = document.getElementById("header")
    document.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("py-2.5")
            header.classList.remove("py-5")
        }
        else {
            header.classList.remove("py-2.5")
            header.classList.add("py-5")
        }
    })

    const roundedScroll = document.getElementById("rounded-scroll")
    const scrollToTop = document.getElementById("scroll-to-top")
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.clientHeight;
        const scrollableHeight = documentHeight - windowHeight;
        const scrollPercentage = scrollableHeight > 0 ? (scrollPosition / scrollableHeight) * 100 : 0;

        roundedScroll.style.strokeDashoffset = 307.919 - (scrollPercentage * 307.919) / 100
        roundedScroll.style.strokeDasharray = "307.919, 307.919"

        if (scrollPosition > 350) {
            scrollToTop.style.display = "flex"
        } else {
            scrollToTop.style.display = "none"
        }
    };
    window.addEventListener("scroll", handleScroll);

    scrollToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    })

    const accordionHeader = document.querySelectorAll(".accordion-header");
    accordionHeader.forEach((item) => {
        item.addEventListener("click", () => {
            const isOpen = item.getAttribute("data-open") === "true";

            accordionHeader.forEach((a) => {
                a.nextElementSibling.classList.add("max-h-0", "overflow-hidden", "py-0", "opacity-0", "invisible");
                a.nextElementSibling.classList.remove("max-h-25", "overflow-auto", "py-4", "opacity-100", "visible");
                a.setAttribute("data-open", "false");
            });

            if (!isOpen) {
                item.nextElementSibling.classList.remove("max-h-0", "overflow-hidden", "py-0", "opacity-0", "invisible");
                item.nextElementSibling.classList.add("max-h-25", "overflow-auto", "py-4", "opacity-100", "visible");
                item.setAttribute("data-open", "true");
            }
        });
    });

    const logosSlide = document.querySelector(".logos-slide");
    if (logosSlide) {
        const logoCopy = logosSlide.cloneNode(true);
        document.querySelector(".logo-slider").appendChild(logoCopy);
    }

    const svg = document.getElementById("preloaderSvg");
    if (svg && !location.hash) {
        const tl = gsap.timeline();
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
        const unlock = () => document.documentElement.classList.remove("preloader-lock");

        tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
            delay: 0.47,
            duration: 0.24,
            y: -100,
            opacity: 0,
        });
        tl.to(svg, {
            duration: 0.28,
            attr: { d: curve },
            ease: "power2.easeIn",
        }).to(svg, {
            duration: 0.2,
            attr: { d: flat },
            ease: "power2.easeOut",
        });
        tl.to(".preloader", {
            y: -1500,
            duration: 0.31,
        });
        tl.to(".preloader", {
            duration: 0,
            zIndex: -1,
            display: "none",
        });
        tl.eventCallback("onComplete", unlock);
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger)
    }

    const fadeInUps = document.querySelectorAll(".fadeInUp")
    const triggeredCards = new Map()

    fadeInUps.forEach((fadeInUp) => {
        const delay = parseFloat(fadeInUp.dataset.delay) || 0;

        gsap.set(fadeInUp, {
            y: 70
        });

        if (fadeInUp.dataset.trigger) {
            const key = fadeInUp.dataset.trigger;
            if (!triggeredCards.has(key)) triggeredCards.set(key, []);
            triggeredCards.get(key).push({ el: fadeInUp, delay });
            return;
        }

        gsap.to(fadeInUp, {
            scrollTrigger: fadeInUp,
            y: 0,
            delay: delay,
            duration: 2
        })
    })

    triggeredCards.forEach((cards, selector) => {
        const title = document.querySelector(selector);
        const titleDelay = title ? (parseFloat(title.dataset.delay) || 0) : 0;
        const halfway = titleDelay + 1;
        const firstDelay = Math.min(...cards.map((card) => card.delay));

        cards.forEach(({ el, delay }) => {
            gsap.to(el, {
                scrollTrigger: { trigger: selector, start: "top bottom" },
                y: 0,
                delay: halfway + (delay - firstDelay),
                duration: 2
            })
        })
    })

    document.querySelectorAll(".fadeInLeft").forEach((fadeInLeft) => {
        const delay = parseFloat(fadeInLeft.dataset.delay) || 0;

        gsap.set(fadeInLeft, {
            x: -80
        });

        gsap.to(fadeInLeft, {
            scrollTrigger: fadeInLeft,
            x: 0,
            delay: delay,
            duration: 2
        })
    })

}

$(document).ready(function () {
    if ($(".testimonials-wrap").length) {
        $(".testimonials-wrap").slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
            speed: 1000,
            focusOnSelect: false,
            prevArrow: ".testimonial-prev",
            nextArrow: ".testimonial-next",
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    }

    if ($(".work-popup").length) {
        $(".work-popup").magnificPopup({
            type: "image",
            removalDelay: 300,
            mainClass: "mfp-with-zoom",
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: false,
                duration: 300,
                easing: "ease-in-out",
                opener: function (openerElement) {
                    return openerElement.is("img") ? openerElement : openerElement.find("img");
                }
            }
        });
    }
})
