const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posX = document.getElementById("posx")
const posY = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

q1.accessKey = "b"
q2.accessKey = "n"

const info = (el) => {
    let sas = el.getBoundingClientRect()
    posX.innerHTML = `Posx: ${sas.x}`
    posY.innerHTML = `Posx: ${sas.y}`
    largura.innerHTML = `Posx: ${sas.width}`
    altura.innerHTML = `Posx: ${sas.height}`
}

q1.addEventListener("click", (evt) => {
    info(evt.target)
})

q2.addEventListener("click", (evt) => {
    info(evt.target)
})