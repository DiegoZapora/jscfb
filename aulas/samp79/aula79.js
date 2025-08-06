const btnE = document.getElementById("btnEsquerda")
const btnD = document.getElementById("btnDireita")
const btnP = document.getElementById("btnParar")
const btnB = document.getElementById("btnBaixo")
const btnC = document.getElementById("btnCima")
const carro = document.getElementById("carro")
const branco = document.getElementById("branco")

const inicio = () => {
    carro.style.position = "relative"
    carro.style.left = "0px"
    carro.style.top = "0px"

    branco.style.left = "68px"
    branco.style.top = "5px"
}

let audio = new Audio("assets/carro (1).mp3")
let freio = new Audio("assets/carro (2).mp3")

let anima = null

const  mover = (dir) => {
    let posD = parseInt(carro.style.left) 
    posD = posD + (10*dir)
    carro.style.left = `${posD}px`
}

const moverY = (dirY) => {
    let posY = parseInt(carro.style.top)
    posY = posY + (10*dirY)
    carro.style.top = `${posY}px`
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

window.addEventListener("keypress", (s) => {
    if (s.key === "s") btnB.click()
})

window.addEventListener("keypress", (w) => {
    if (w.key === "w") btnC.click()
})

btnD.addEventListener("click", () => {
    freio.pause()
    audio.play()
    clearInterval(anima)
    anima = setInterval(mover, 20, +1)
    branco.style.left = "68px"
    branco.style.top = "5px"
    branco.style.width = "20px"
    branco.style.height = "30px"
    carro.style.width = "100px"
    carro.style.height = "40px"
})

btnE.addEventListener("click", () => {
    freio.pause()
    audio.play()
    clearInterval(anima)
    anima = setInterval(mover, 20, -1)
    branco.style.left = "10px"
    carro.style.width = "100px"
    carro.style.height = "40px"
    branco.style.top = "5px"
    branco.style.width = "20px"
    branco.style.height = "30px"
})

btnP.addEventListener("click", () => {
    clearInterval(anima)
    audio.pause()
    freio.play()
})

btnB.addEventListener("click", () => {
    freio.pause()
    audio.play()
    clearInterval(anima)
    anima = setInterval(moverY, 20, +1)
    carro.style.width = "45px"
    carro.style.height = "100px"
    branco.style.top = "70px"
    branco.style.left = "7px"
    branco.style.width = "33px"
    branco.style.height = "20px"
})

btnC.addEventListener("click", () => {
    freio.pause()
    audio.play()
    clearInterval(anima)
    anima = setInterval(moverY, 20, -1)
    branco.style.top = "10px"
    branco.style.left = "7px"
    carro.style.width = "45px"
    carro.style.height = "100px"
    branco.style.width = "33px"
    branco.style.height = "20px"
})

window.addEventListener("load", inicio())