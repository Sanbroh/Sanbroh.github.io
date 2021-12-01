// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("to-top").style.display = "block";
  } else {
    document.getElementById("to-top").style.display = "none";
  }

  navtext = document.getElementById("navtext");

  if (document.body.scrollTop > 3860 || document.documentElement.scrollTop > 3860) {
    navtext.innerHTML = "About";
    document.getElementById("bg-title").innerHTML = "About";
  } else if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    navtext.innerHTML = "Projects";
    document.getElementById("bg-title").innerHTML = "Projects";
  } else {
    navtext.innerHTML = "Welcome";
    document.getElementById("bg-title").innerHTML = "Welcome";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function goToMe() {
  window.scrollTo({top: 4330, behavior: 'smooth'});
}

function toggleMenuOn() {
  document.getElementById("infomenu").style.display = "block";
}

function toggleMenuOff() {
  document.getElementById("infomenu").style.animation = "infoFadeOut linear 0.5s";
  setTimeout(function() {
    document.getElementById("infomenu").style.display = "none";
    document.getElementById("infomenu").style.animation = "none";
  }, 500);
}
