document.getElementById("icon-1").addEventListener("click", openClose);
document.getElementById("icon-2").addEventListener("click", openClose);
document.getElementById("icon-3").addEventListener("click", openClose);
document.getElementById("icon-4").addEventListener("click", openClose);

function openClose() {
  let element = document.getElementsByClassName("active");

  if (
    (element[0] !== this.parentElement.parentElement) &
    (element[0] !== undefined)
  ) {
    element[0].classList.toggle("active");
  }

  this.parentElement.parentElement.classList.toggle("active");
}
