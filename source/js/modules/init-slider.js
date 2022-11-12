import Swiper, {Navigation, Pagination} from 'swiper';

export const initCoachesSlider = () => {
  const coachesSliderContainer = document.querySelector('.coaches__slider');

  if (!coachesSliderContainer) {
    return;
  }

  const coachSlider = new Swiper(coachesSliderContainer, {
    modules: [Navigation, Pagination],
    effect: 'slide',
    loop: true,
    loopFillGroupWithBlank: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
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
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
      },
    },
    on: {
      resize() {
        this.update();
      },
      orientationchange() {
        this.update();
      },
    },
  });
  coachSlider.update();
};
