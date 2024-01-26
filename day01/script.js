const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetNumber = document.querySelector(".reset");
const sub = document.querySelector(".substract");

add.addEventListener("click", () =>{
    count.innerHTML++;
});
resetNumber.addEventListener("click", () =>{
    count.innerHTML =0;
});
sub.addEventListener("click", () =>{
    count.innerHTML--;
});
