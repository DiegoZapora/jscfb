const btnE = document.getElementById("btnEsquerda")
const btnD = document.getElementById("btnDireita")
const btnB = document.getElementById("btnBaixo")
const btnC = document.getElementById("btnCima")
const carro = document.getElementById("carro")
const branco = document.getElementById("branco")
const outro = document.getElementById("outro")
const divTempo = document.getElementById("tempo")
const score = document.getElementById("score")
const plano = document.getElementById("plano")

const inicio = () => {
    carro.style = "position: relative; left: 0px; width: 100px; top: 0px"

    branco.style.left = "68px"
    branco.style.top = "5px"

    tamMax = window.innerWidth - parseInt(carro.style.width)
    tamMaxY = window.innerHeight - parseInt(carro.style.width)
}

let anima = null
let tamMax = null
let tamMaxY = null

const over = () => {
    location.reload()
}

let tempoVivo = null

const tempo = () => {
    tempoVivo++
    divTempo.innerHTML = `Score: ${tempoVivo}`
    setTimeout(tempo, 5000000000)
}

const  mover = (dir) => {
    tempo()
    if (dir > 0) {
        if (parseInt(carro.style.left) <= tamMax) {
            carro.style.left = parseInt(carro.style.left) + (10*dir) +"px"
            anima = setTimeout(mover, 20, dir)
            if (parseInt(carro.style.left) > tamMax) {
                clearTimeout(tempo())
                carro.style.backgroundColor = "white"
                outro.style.display = "flex"
                score.innerHTML = `Score: ${tempoVivo+1}`
                setTimeout(over, 1500)
                btnE.disabled = true
                btnD.disabled = true
                btnC.disabled = true
                btnB.disabled = true
            }
        } else {
            clearTimeout(anima)
        }
    } else if (dir < 0) {
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10*dir) +"px"
            anima = setTimeout(mover, 20, dir)
            if (parseInt(carro.style.left) < 0) {
                clearTimeout(tempo())
                carro.style.backgroundColor = "white"
                outro.style.display = "flex"
                score.innerHTML = `Score: ${tempoVivo+1}`
                setTimeout(over, 1500)
                btnE.disabled = true
                btnD.disabled = true
                btnC.disabled = true
                btnB.disabled = true
            }
        } else {
            clearTimeout(anima)
        }
    }
}


const moverY = (dirY) => {
    tempo()
    if (dirY > 0) {
        if (parseInt(carro.style.top) <= tamMaxY) {
            carro.style.top = parseInt(carro.style.top) + (10*dirY) +"px"
            anima = setTimeout(moverY, 20, dirY)
            if (parseInt(carro.style.top) > tamMaxY) {
                clearTimeout(tempo())
                carro.style.backgroundColor = "white"
                outro.style.display = "flex"
                score.innerHTML = `Score: ${tempoVivo+1}`
                setTimeout(over, 1500)
                btnE.disabled = true
                btnD.disabled = true
                btnC.disabled = true
                btnB.disabled = true
            }
        } else {
            clearTimeout(anima)
        }
    }

    if (dirY < 0) {
        if (parseInt(carro.style.top) >= 0) {
            carro.style.top = parseInt(carro.style.top) + (10*dirY) +"px"
            anima = setTimeout(moverY, 20, dirY)
            if (parseInt(carro.style.top) < 0) {
                clearTimeout(tempo())
                carro.style.backgroundColor = "white"
                outro.style.display = "flex"
                score.innerHTML = `Score: ${tempoVivo+1}`
                setTimeout(over, 1500)
                btnE.disabled = true
                btnD.disabled = true
                btnC.disabled = true
                btnB.disabled = true
            }
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
    clearTimeout(anima)
    mover(-1)
    branco.style.left = "10px"
    carro.style.width = "100px"
    carro.style.height = "40px"
    branco.style.top = "5px"
    branco.style.width = "20px"
    branco.style.height = "30px"
})

btnB.addEventListener("click", () => {
    clearTimeout(anima)
    moverY(+1)
    carro.style.width = "45px"
    carro.style.height = "100px"
    branco.style.top = "70px"
    branco.style.left = "5px"
    branco.style.width = "33px"
    branco.style.height = "20px"
})

btnC.addEventListener("click", () => {
    clearTimeout(anima)
    moverY(-1)
    branco.style.top = "10px"
    branco.style.left = "5px"
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
    tamMaxY = window.innerHeight - parseInt(carro.style.height)
})