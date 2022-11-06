export const initPlayVideo = () => {
  const video = document.querySelector('.gyms__video video');
  if (!video) {
    return;
  }

  const playButton = document.querySelector('.gyms__video-play');

  const videoPlay = () => {
    video.play();
    video.setAttribute('controls', true);
    playButton.classList.add('hidden');
    playButton.removeEventListener('click', videoPlay);
  };

  playButton.addEventListener('click', videoPlay);
};
