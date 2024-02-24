let button = document.querySelector(".button");
const word = document.querySelector(".input");


button.addEventListener("click", count);

function count(){
    let result = document.querySelector(".result");
    let wordVal = word.value.toLowerCase();
    let countVowels=0;
    for (let index = 0; index < wordVal.length; index++) {
        //if(word[index] === 'a'|| word[index] === 'e' || word[index] === 'i' || word[index] === 'o' || word[index] === 'u'){
        if(wordVal[index].match(/([a,e,i,o,u])/)){
            countVowels++;

        }

    }
    result.innerHTML = "La cantidad de vocales en la palabra es " + countVowels;
}
