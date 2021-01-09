function gleichung(a,b) {
return a+b
} 
let first = document.querySelector("#first")
let second = document.querySelector("#second")
let button = document.querySelector("#gleichung")
button.onclick = function(){
    let result = gleichung( Number(first.value), Number(second.value))
    document.querySelector("#result").innerText = result
}

function rechnen(a) {
    return a*0.19
    } 
    let amount = document.querySelector("#amount")
    let button2 = document.querySelector("#rechnen")
    button2.onclick = function(){
        let result = rechnen( Number(amount.value))
        document.querySelector("#tax").innerText = result.toFixed(2)
    }