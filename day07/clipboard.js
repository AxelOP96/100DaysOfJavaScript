const d = document,
n = navigator;

console.log(n.clipboard);
const $copy = d.getElementById("copy"); 
const $coupon = d.getElementById("coupon");
d.addEventListener("click", e =>{
    e.preventDefault();
    if(e.target === $copy){
        //n.clipboard.readText().then( (`${$coupon.value}`))
        console.log($coupon.placeholder)
        const datos = {
            "text/plain" : `${$coupon.placeholder}`
        }
        const action = new ClipboardItem(datos);
        n.clipboard.write([action]);
        console.log(action)
        //action.clipboardData.items.add(`${$coupon.value}`,'text/plain');
        
        //d.dispatchEvent(action)
    }
})