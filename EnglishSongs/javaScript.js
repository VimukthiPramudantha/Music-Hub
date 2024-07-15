var isDarkMode = false;

function changeB() {
  var body = document.body;
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  }
}
