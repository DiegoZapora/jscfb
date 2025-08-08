const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posX = document.getElementById("posx")
const posY = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

let sas = q1.getBoundingClientRect()
let sus = q2.getBoundingClientRect()

let d1 = document.createElement("div")
d1.innerHTML = sas.x
posX.appendChild(d1)

let d2 = document.createElement("div")
d2.innerHTML = sas.y
posY.appendChild(d2)

let d3 = document.createElement("div")
d3.innerHTML = sas.width
largura.appendChild(d3)

let d4 = document.createElement("div")
d4.innerHTML = sas.height
altura.appendChild(d4)

let d5 = document.createElement("div")
d5.innerHTML = sus.x
posX.appendChild(d5)

let d6 = document.createElement("div")
d6.innerHTML = sus.y
posY.appendChild(d6)

let d7 = document.createElement("div")
d7.innerHTML = sus.width
largura.appendChild(d7)

let d8 = document.createElement("div")
d8.innerHTML = sus.height
altura.appendChild(d8)