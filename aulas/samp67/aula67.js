import { albuns, musicas } from "./andre.js";

const obj = document.getElementById("obj")

albuns.map((e) => {
    let novo = document.createElement("p")
    novo.innerHTML = e
    obj.appendChild(novo)
})

musicas.map((e) => {
    let novo = document.createElement("p")
    novo.innerHTML = e
    obj.appendChild(novo)
})