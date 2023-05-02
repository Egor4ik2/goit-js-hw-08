import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', () => {
  const player = new Vimeo(document.querySelector('#vimeo-player'));

  player.on('timeupdate', throttle(() => {
    localStorage.setItem('videoplayer-current-time', player.getCurrentTime());
  }, 1000));

  const currentTime = localStorage.getItem('videoplayer-current-time');

  if (currentTime && currentTime < player.getDuration()) {
    player.setCurrentTime(currentTime);
  }
  
});
