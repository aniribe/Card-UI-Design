// document.getElementsByClassName("option").addEventListener("click", function() {
//   this.removeC
// })
function myFunction() {
  document.getElementsByClassName("option").classList.toggle("show");
}

document.ready(function() {
  document.getElementsByClassName("option").classList.toggle("active");
});
