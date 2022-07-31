//
//
// document.addEventListener('DOMContentLoaded', function(){
//   if (document.readyState == 'readyinteractive') {
//     alert("page is ready");
//   }
//     document.getElementById("loader-index").style.display = "none";
//     document.getElementById("loaded-index").style.display = "block";
//     document.body.removeAttribute("style");
//     document.body.style.color = "#fff";
//     document.body.style.height = "auto";
//     document.body.style.fontFamily = "'Cormorant Infant', serif";
//     document.body.style.background = "black";
//
// });

window.onload = function() {
  document.getElementById("loader-index").style.display = "none";
  document.getElementById("loaded-index").style.display = "block";
  document.body.removeAttribute("style");
  document.body.style.color = "#fff";
  document.body.style.height = "auto";
  document.body.style.fontFamily = "'Cormorant Infant', serif";
  document.body.style.background = "black";
}
