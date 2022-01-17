//https://stackoverflow.com/questions/1480133/how-can-i-get-an-objects-absolute-position-on-the-page-in-javascript
// var cumulativeOffset = function(element) {
//     var top = 0, left = 0;
//     do {
//         top += element.offsetTop || 0;
//         left += element.offsetLeft || 0;
//         element = element.offsetParent;
//     } while(element);
//
//     return {
//         top: top,
//         left: left
//     };
// };

//https://stackoverflow.com/questions/44109314/javascript-calculate-with-viewport-width-height
function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("to-top").style.display = "block";
  } else {
    document.getElementById("to-top").style.display = "none";
  }

  navtext = document.getElementById("navtext");
  // projectsTop = cumulativeOffset(document.getElementById('about-me')).top;

  if (document.body.scrollTop > vh(764) || document.documentElement.scrollTop > vh(764)) {
    navtext.innerHTML = "Contacts";
    document.getElementById("bg-title").innerHTML = "Contacts";
  } else if (document.body.scrollTop > vh(630) || document.documentElement.scrollTop > vh(630)) {
    navtext.innerHTML = "About";
    document.getElementById("bg-title").innerHTML = "About";
  } else if (document.body.scrollTop > vh(40) || document.documentElement.scrollTop > vh(40)) {
    navtext.innerHTML = "Projects";
    document.getElementById("bg-title").innerHTML = "Projects";
  } else {
    navtext.innerHTML = "Welcome";
    document.getElementById("bg-title").innerHTML = "Welcome";
  }
}

function goTo(element) {
  if (element == 1) {
    topFunction();
  } else if (element == 2) {
    window.scrollTo({top: vh(110), behavior: 'smooth'});
  } else if (element == 3) {
    window.scrollTo({top: vh(712), behavior: 'smooth'});
  } else if (element == 4) {
    window.scrollTo({top: vh(854), behavior: 'smooth'});
  }
  toggleMenuOff();
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
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
