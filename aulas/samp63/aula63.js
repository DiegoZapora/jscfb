const btnA = document.getElementById("btnAlert")
const btnC = document.getElementById("btnConfirm")
const btnP = document.getElementById("btnPrompt")
const h = document.getElementById("h")

btnA.addEventListener("click", () => {
    window.alert("Andre Matos")
})

btnC.addEventListener("click", () => {
    let ret = window.confirm("Você gosta do andre matos?")
    if (ret == true) {
        alert("VOCE É SHOW!")
    } else {
        alert("VAI TOMA NO CU")
    }
})

btnP.addEventListener("click", () => {
    let ret = window.prompt("Fala ai seu merda!")
    let novo = document.createElement("p")
    novo.innerHTML = ret.valueOf()
    h.appendChild(novo)
})