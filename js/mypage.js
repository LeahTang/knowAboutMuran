/*Loader quiting*/

// window.onload = setTimeout(quitLoader, 5000);

//Develoing mode
window.onload = quitLoader;

function quitLoader() {
  var language = "";
  var page = "";
  var pagename = "";
  var pathname = document.location.pathname;
  var loader = document.getElementsByClassName("loader")[0];
  var loaded = document.getElementsByClassName("loaded")[0];
  var body = document.body;
  var uniBody = document.getElementsByClassName("uni-body")[0];
  var cnBody = document.getElementsByClassName("cn")[0];

  for (let i = 0; i < pathname.length; i++) {
    if (pathname[i] == '/') {
      page = "";
    } else {
      page = page + pathname[i];
    }
  }

  if (page.slice(0, 2) == "cn") {
    language = "cn";
    pagename = page.slice(3, );
  } else {
    pagename = page;
  }


  loader.style.display = "none";
  loaded.style.display = "block";
  body.removeAttribute("style");
  body.style.color = "#fff";
  body.style.height = "auto";
  body.style.background = "black";

  if (language == "cn") {
    cnBody.style.fontFamily = "'Noto Serif SC', serif";
  } else {
    body.style.fontFamily = "'Cormorant Infant', serif";
  }

  if (pagename == "projects-in-uni.html") {
    uniBody.style.color = "#4a4a4a";
    uniBody.style.backgroundColor = "#F2F2F2";
  }

}

/* Narbar showing and hiding events
  The events will be trigger by mouse wheel.
*/

document.onmousewheel = function() {

  let navbarDisplay = document.getElementsByClassName("navbar-display")[0];
  let navbar = document.getElementById("navbar");
  let elContent = document.querySelector('.loaded').getBoundingClientRect();
  let currPos = elContent.y;


  if (document.getElementsByClassName("nav-animation")[0]) {
    navbar.classList.remove("nav-animation");
  }
  navbar.classList.add("nav-animation");

  let navAnimation = document.getElementsByClassName("nav-animation")[0];

  if (event.wheelDelta < 0 && currPos < -100) {
    navbarDisplay.style.display = "none";
    navAnimation.style.animationName = "navbarHide";
    navAnimation.style.animationDuration = "1s";
    navAnimation.style.animationIterationCount = "1";
  } else if (event.wheelDelta > 0) {

    if (currPos > -100 || currPos == -100 || currPos == 0) {
      navbarDisplay.style.display = "block";
      navbar.classList.add("bg-transparent");

    } else {
      navbarDisplay.style.display = "block";
      navAnimation.style.animationName = "navbarShow";
      navAnimation.style.animationDuration = "1s";
      navAnimation.style.animationIterationCount = "1";
      navAnimation.style.animationDirection = "ease";
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-black");
    }
  }

}


// stage list tab onclick event
function stageListOnclick(node){
  node.classList.add('active');
  for (const item of document.getElementsByClassName('stage-list-item')){
    if (item.id !== node.id){
      item.classList.remove('active');
    }
  }
}

// project classification onclick: direct to the projects
function projectOnclick(link){
  const node = document.getElementById(link);
  node.classList.add('active');
  for (const item of document.getElementsByClassName('stage-list-item')){
    if (item.id !== node.id){
      item.classList.remove('active');
    }
  }
}
