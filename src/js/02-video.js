import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', async () => {
  const player = new Vimeo(document.querySelector('#vimeo-player'));

  player.on('timeupdate', throttle(async () => {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000));

  const currentTime = parseFloat(localStorage.getItem('videoplayer-current-time'));

  if (!isNaN(currentTime) && currentTime < (await player.getDuration())) {
    player.setCurrentTime(currentTime);
  }
});
sa