
  // Select the element you want to click
  const textbox = document.getElementById('textbox');

  // Define the function that adds the animation classes
  function animateOnClick() {
    // Add the animation classes
    this.classList.add('animate__animated', 'animate__fadeOutDown');

    // // Optional: Remove the animation classes after the animation ends
    // this.addEventListener('animationend', () => {
    //   this.classList.remove('animate__animated', 'animate__fadeOutDown');
    // });
  }

  // Add the click event listener to the div
textbox.addEventListener('click', animateOnClick);