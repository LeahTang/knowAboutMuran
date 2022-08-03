
/*Loader quiting*/

window.onload = setTimeout(quitLoader, 3000);


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

  for (let i =0; i < pathname.length; i++) {
    if (pathname[i] == '/') {
      page = "";
    }
    else {
      page = page + pathname[i];
    }
  }

  if (page.slice(0,2) == "cn") {
    language = "cn";
    pagename = page.slice(2,);
  }
  else {
    pagename = page;
  }


  loader.style.display = "none";
  loaded.style.display = "block";
  body.removeAttribute("style");
  body.style.color = "#fff";
  body.style.height = "auto";
  body.style.background = "black";

  if (language == "cn"){
    cnBody.style.fontFamily = "'Noto Serif SC', serif";
  }
  else {
    body.style.fontFamily = "'Cormorant Infant', serif";
  }

  if (pagename == "projects-in-uni.html") {
    uniBody.style.color = "#4a4a4a";
    uniBody.style.backgroundColor = "white";
  }
  
}
