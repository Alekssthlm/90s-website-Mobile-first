function activateHamburger() {
  var x = document.getElementById("nav-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunction(x) {
  if (y.matches) { // If media query matches
    document.getElementById("nav-menu").removeAttribute("style");
  } 
}

var y = window.matchMedia("(min-width: 35rem)")
myFunction(y) // Call listener function at run time
y.addListener(myFunction) // Attach listener function on state changes