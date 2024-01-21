const toaster = document.querySelector(".toaster");
const closeButton = toaster.querySelector(".close-toaster");

document.addEventListener("mouseleave", function (event) {
  if (event.clientY <= 0 || event.clientX <= 0 || event.clientX >= window.innerWidth || event.clientY >= window.innerHeight) {
    toaster.classList.remove("collapsed");
  }
});

setTimeout(function () {
  toaster.classList.remove("collapsed");
}, 15000);

closeButton.addEventListener("click", function () {
  toaster.remove();
});
