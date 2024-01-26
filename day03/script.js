

const number = document.querySelector(".random");
const btn = document.querySelector(".button");

const generateNumber = () =>{
    const rand = Math.floor(Math.random() * 100);
    number.innerHTML = rand;
}

btn.addEventListener("click", generateNumber);
generateNumber();
