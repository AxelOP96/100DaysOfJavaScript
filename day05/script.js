const button = document.querySelector(".button");
const result = document.querySelector(".result");

button.addEventListener("click", check);

function check(){
    const word = document.querySelector(".input").value;
    let length = word.length;
    let start = word.substring(0, Math.floor(length/2)).toLowerCase();
    let end = word.substring(length - Math.floor(length/2)).toLowerCase();

    let change = [...end].reverse().join("");

    if(start == change){
        result.innerHTML= `${word.toUpperCase()} es un palindromo`;
    }else{
        result.innerHTML= `${word.toUpperCase()} no es un palindromo`;
    }

}
