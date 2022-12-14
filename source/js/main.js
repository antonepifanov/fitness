import {iosVhFix} from './utils/ios-vh-fix';
import {initPhoneMask} from './modules/init-phone-mask';
import {initValidation} from './modules/init-validation';
import {initPlayVideo} from './modules/init-play-video';
import {getSubscriptionsTabs} from './modules/init-tabs';
import {initCoachesSlider} from './modules/init-coaches-slider';
import {initReviewsSlider} from './modules/init-reviews-slider';


window.addEventListener('DOMContentLoaded', () => {
  // Utils
  iosVhFix();

  // Modules
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initPlayVideo();
    initPhoneMask();
    initValidation();
    getSubscriptionsTabs();
    initCoachesSlider();
    initReviewsSlider();
  });
});
