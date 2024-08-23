var isDarkMode = false;

function changeB() {
  var body = document.body;
  isDarkMode = !isDarkMode;
  var img = document.getElementById("navImg");

  if (isDarkMode) {
    img.setAttribute("src", "../images/icons8-partly-cloudy-day-50 (1).png");
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    img.setAttribute("src", "../images/icons8-moon-30.png");
  }
}
