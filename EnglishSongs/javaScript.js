var isOriginal = true;

  function changeB() {
    var body = document.getElementsByTagName('body')[0];
    if (isOriginal) {
      body.style.backgroundImage = "url('./img/austin-prock-Hz3Kjzgyv_Q-unsplash.jpg')";
    } else {
      body.style.backgroundImage = "url('./img/Untitled design.png')";
    }
    isOriginal = !isOriginal; // Toggle the state
  }