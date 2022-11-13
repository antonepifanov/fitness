import Swiper, {Navigation} from 'swiper';

export const initCoachesSlider = () => {
  const coachesSliderContainer = document.querySelector('.coaches__slider');

  if (!coachesSliderContainer) {
    return;
  }

  const coachSlider = new Swiper(coachesSliderContainer, {
    modules: [Navigation],
    effect: 'slide',
    loop: true,
    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },
    a11y: {
      enabled: true,
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
      },
    },
    on: {
      init() {
        const doubleSlides = coachesSliderContainer.querySelectorAll('.swiper-slide-duplicate');
        doubleSlides.forEach((slide) => {
          slide.setAttribute('tabindex', '-1');
        });
      },
      resize() {
        coachSlider.update();
      },
      orientationchange() {
        coachSlider.update();
      },
    },
  });
};
