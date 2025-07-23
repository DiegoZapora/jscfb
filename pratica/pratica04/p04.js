const tNum = [...document.querySelectorAll("#t")]
const oNum = [...document.querySelectorAll("#to")]
const res = document.getElementById("res")
const dS = document.getElementById("shower")
const clear = document.getElementById("limpar")
const onOff = document.getElementById("on")

let sinal = false

tNum.forEach((e) => {
    e.addEventListener("click", (evt) => {
        if (dS.innerHTML == 0) {
            dS.textContent = ""
        }
        dS.innerHTML += evt.target.innerHTML
    })
})

oNum.forEach((e) => {
    e.addEventListener("click", (evt) => {
        if (!sinal) {
            sinal = true
            if (dS.innerHTML == "0") {
                dS.textContent = ""
            } else {
                dS.innerHTML += evt.target.innerHTML
            }
        }
    })
})

clear.addEventListener("click", () => {
    sinal = true
    dS.textContent = "0"
})

onOff.addEventListener("click", () => {
    
})