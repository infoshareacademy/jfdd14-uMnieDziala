const modal = document.getElementById("modal__instruction");
const btn = document.getElementById("btn__instruction");
const span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", function() {
  modal.style.display = "block";
});

span.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});