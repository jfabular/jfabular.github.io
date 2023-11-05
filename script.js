
// Select the element you want to click
const textbox = document.getElementById('textbox');

// Define the function that adds the animation classes
function animateOnClick() {
  // Add the animation classes
  this.classList.add('animate__animated', 'animate__fadeOutDown');
}

// Add the click event listener to the div
textbox.addEventListener('click', animateOnClick);


var sound = new Howl({
  src: ['assets/ryuichiopening.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.5,
  mute: true
});

document.getElementById('sound-toggle').addEventListener('click', function() {
  var soundIcon = document.getElementById('sound-icon');
  
  if (sound.mute()) {
    sound.mute(false);
    soundIcon.src = 'assets/On.svg';
  } else {
    sound.mute(true);
    soundIcon.src = 'assets/Off.svg';
  }
});