const textbox = document.getElementById('textbox');
const soundToggle = document.getElementById('sound-toggle');
const soundIcon = document.getElementById('sound-icon');
const avi = document.getElementById('avi-container');

textbox.style.pointerEvents = 'none';

function animateOnClick() {
  textbox.classList.add('animate__animated', 'animate__fadeOutDown');
  avi.classList.add('animate__animated', 'animate__fadeOut');
}

// delay before able to click
function allowTextboxClick() {
  textbox.style.pointerEvents = 'auto';

  textbox.addEventListener('click', animateOnClick);
}

setTimeout(allowTextboxClick, 25000);

// toggle sound
function toggleSound() {
  if (sound.mute()) {
    sound.mute(false);
    soundIcon.src = 'assets/On.svg';
  } else {
    sound.mute(true);
    soundIcon.src = 'assets/Off.svg';
  }

  // resume audiocontext on gesture
  if (Howler.ctx.state === 'suspended') {
    Howler.ctx.resume();
  }
}

// add listener to textbox
textbox.addEventListener('click', animateOnClick);
// avi.addEventListener('click', animateOnClick);

// initialize sound object
var sound = new Howl({
  src: ['assets/ryuichidream.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.25,
  mute: true
});

// add click event listener to the sound toggle div
soundToggle.addEventListener('click', function() {
  toggleSound();
});
