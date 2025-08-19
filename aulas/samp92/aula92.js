import {Caixa} from './mostrar.js'
const config = {
    cor: "#48f",
    tipo: "ok",
}

const btnM = document.getElementById("btnMostrar")

btnM.addEventListener("click", () => {
    Caixa.mostrarCX(config, "Filme", "Gostaria de alugar esse filme?")
})