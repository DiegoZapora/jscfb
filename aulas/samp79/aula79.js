const btnE = document.getElementById("btnEsquerda")
const btnD = document.getElementById("btnDireita")
const btnP = document.getElementById("btnParar")
const carro = document.getElementById("carro")

const inicio = () => {
    carro.style.position = "relative"
    carro.style.left = "0px"
}

let anima = null

const  mover = (dir) => {
    let posD = parseInt(carro.style.left) 
    posD = posD + (10*dir)
    carro.style.left = `${posD}px`
}

window.addEventListener("keypress", (d) => {
    if (d.key === "d") btnD.click()
})

window.addEventListener("keypress", (e) => {
    if (e.key === "a") btnE.click()
})

window.addEventListener("keypress", (espaco) => {
    if (espaco.key === " ") btnP.click()
})

btnD.addEventListener("click", () => {
    clearInterval(anima)
    anima = setInterval(mover, 20, +1)
})

btnE.addEventListener("click", () => {
    clearInterval(anima)
    anima = setInterval(mover, 20, -1)
})

btnP.addEventListener("click", () => {
    clearInterval(anima)
})

window.addEventListener("load", inicio())