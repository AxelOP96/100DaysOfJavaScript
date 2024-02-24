const modal = document.querySelector(".modal");
const button = document.querySelector("#button");
const close = document.querySelector(".close");
button.addEventListener("click", call);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function call(){
    modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}
