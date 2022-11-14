import Swiper, {Navigation} from 'swiper';

export const initReviewsSlider = () => {
  const reviewsSliderContainer = document.querySelector('.reviews__slider');

  if (!reviewsSliderContainer) {
    return;
  }

  const coachSlider = new Swiper(reviewsSliderContainer, {
    modules: [Navigation],
    effect: 'slide',
    slidesPerView: 1,
    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    a11y: {
      enabled: true,
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
    on: {
      resize() {
        coachSlider.update();
      },
      orientationchange() {
        coachSlider.update();
      },
    },
  });
};
