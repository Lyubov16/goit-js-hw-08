import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
 console.log(iframe)

// player.on('timeupdate', e => {
//     console.log(e.seconds)
// });

const onPlay = function(data) {
    console.log(data)
};

player.on('timeupdate', onPlay);

// function onPlay (e) {
//     localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, e.seconds);
// }

// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
//     });
