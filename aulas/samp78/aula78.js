const btnE = document.getElementById("btnEsquerda")
const btnD = document.getElementById("btnDireita")
const carro = document.getElementById("carro")

const inicio = () => {
    carro.style.position = "relative"
    carro.style.left = "0px"
}

btnD.addEventListener("click", () => {
    let posD = parseInt(carro.style.left) 
    posD = posD + 10
    carro.style.left = `${posD}px`
})

btnE.addEventListener("click", () => {
    let posD = parseInt(carro.style.left) 
    posD = posD - 10
    carro.style.left = `${posD}px`
})

window.addEventListener("load", inicio())