// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("to-top").style.display = "block";
  } else {
    document.getElementById("to-top").style.display = "none";
  }

  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("navtext").innerHTML = "Projects";
    document.getElementById("bg-title").innerHTML = "Projects";
  } else {
    document.getElementById("navtext").innerHTML = "Welcome";
    document.getElementById("bg-title").innerHTML = "Welcome";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
