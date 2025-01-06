//your JS code here. If required.
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Helper function to get a cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Apply saved preferences on page load
window.onload = function() {
  var fontSize = getCookie("fontsize");
  var fontColor = getCookie("fontcolor");

  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
    document.getElementById("fontsize").value = fontSize;
  }
  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
    document.getElementById("fontcolor").value = fontColor;
  }
}

// Save preferences when the form is submitted
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var fontSize = document.getElementById("fontsize").value;
  var fontColor = document.getElementById("fontcolor").value;
  
  setCookie("fontsize", fontSize, 365);
  setCookie("fontcolor", fontColor, 365);
  
  document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
  document.documentElement.style.setProperty('--fontcolor', fontColor);
});
