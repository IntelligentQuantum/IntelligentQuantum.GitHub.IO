import { Autoplay, Keyboard, Navigation } from 'swiper';

export const SWIPER_CONFIG_1 =
    {
        modules: [ Keyboard, Autoplay, Navigation ],
        keyboard: { enabled: true },
        autoplay: { delay: 2500, disableOnInteraction: false },
        spaceBetween: 20,
        breakpoints:
            {
                0: { slidesPerView: 1 },
                650: { slidesPerView: 2 },
                1400: { slidesPerView: 3 }
            }
    };

export const SWIPER_CONFIG_2 =
    {
        modules: [ Keyboard, Autoplay ],
        keyboard: { enabled: true },
        autoplay: { delay: 2500, disableOnInteraction: false },
        spaceBetween:  20,
        breakpoints:
            {
                0: { slidesPerView: 1 },
                450: { slidesPerView: 2 },
                650: { slidesPerView: 3 },
                1400: { slidesPerView: 5 }
            }
    };

