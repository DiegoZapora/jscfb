const btnE = document.getElementById("btnEsquerda")
const btnD = document.getElementById("btnDireita")
const btnP = document.getElementById("btnParar")
const btnB = document.getElementById("btnBaixo")
const btnC = document.getElementById("btnCima")
const carro = document.getElementById("carro")
const branco = document.getElementById("branco")

const inicio = () => {
    carro.style = "position: relative; left: 0px; width: 100px; top: 0px"

    branco.style.left = "68px"
    branco.style.top = "5px"

    tamMax = window.innerWidth - parseInt(carro.style.width)
    tamMaxY = window.innerHeight - parseInt(carro.style.top)
}

let audio = new Audio("assets/carro (1).mp3")
let freio = new Audio("assets/carro (2).mp3")
let batida = new Audio("assets/carri.mp3")

let anima = null
let tamMax = null
let tamMaxY = null

const  mover = (dir) => {
    if (dir > 0) {
        if (parseInt(carro.style.left) <= tamMax) {
            carro.style.left = parseInt(carro.style.left) + (10*dir) +"px"
            anima = setTimeout(mover, 20, dir)
        } else {
            clearTimeout(anima)
        }
    }else if (dir < 0) {
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10*dir) +"px"
            anima = setTimeout(mover, 20, dir)
        } else {
            clearTimeout(anima)
        }
    }
}

const moverY = (dirY) => {
    if (dirY > 0) {
        if (parseInt(carro.style.top) <= tamMaxY) {
            carro.style.top = parseInt(carro.style.top) + (10*dirY) +"px"
            anima = setTimeout(moverY, 20, dirY) 
        } else {
            clearTimeout(anima)
        }
    }

    if (dirY < 0) {
        if (parseInt(carro.style.top) >= 0) {
            carro.style.top = parseInt(carro.style.top) + (10*dirY) +"px"
            anima = setTimeout(moverY, 20, dirY) 
        } else {
            clearTimeout(anima)
        }
    }
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
    clearTimeout(anima)
    mover(+1)
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
    clearTimeout(anima)
    mover(-1)
    branco.style.left = "10px"
    carro.style.width = "100px"
    carro.style.height = "40px"
    branco.style.top = "5px"
    branco.style.width = "20px"
    branco.style.height = "30px"
})

btnP.addEventListener("click", () => {
    clearTimeout(anima)
    audio.pause()
    freio.play()
})

btnB.addEventListener("click", () => {
    freio.pause()
    audio.play()
    clearTimeout(anima)
    moverY(+1)
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
    clearTimeout(anima)
    moverY(-1)
    branco.style.top = "10px"
    branco.style.left = "7px"
    carro.style.width = "45px"
    carro.style.height = "100px"
    branco.style.width = "33px"
    branco.style.height = "20px"
})

window.addEventListener("load", inicio())

window.addEventListener("resize", () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})

window.addEventListener("resize", () => {
    tamMaxY = window.innerHeight - parseInt(carro.style.width)
})