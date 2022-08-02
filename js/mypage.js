
/*Loader quiting*/

window.onload = setTimeout(quitLoader, 3000);


function quitLoader() {
  var loader = document.getElementsByClassName("loader")[0];
  var loaded = document.getElementsByClassName("loaded")[0];
  var body = document.body;
  var uniBody = document.getElementsByClassName("uni-body")[0];
  var cnBody = document.getElementsByClassName("cn")[0];

  loader.style.display = "none";
  loaded.style.display = "block";
  body.removeAttribute("style");
  body.style.color = "#fff";
  body.style.height = "auto";
  body.style.fontFamily = "'Cormorant Infant', serif";
  body.style.background = "black";
  uniBody.style.color = "#4a4a4a";
  uniBody.style.backgroundColor = "white";
  cnBody.style.fontFamily = "PMingLiU";
}
