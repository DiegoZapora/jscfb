import contato from "./contatos.js"

const inpN = document.getElementById("inp_Nome")
const inpT = document.getElementById("inp_Tel")
const inpE = document.getElementById("inp_Imai")
const btnG = document.getElementById("BtnGravar")
const caixaG = document.getElementById("gravacoes")

btnG.addEventListener("click", () => {
    const cont = {
        nome: inpN.value,
        tele: inpT.value,
        email: inpE.value
    }

    contato.addContato(cont, caixaG)

    inpN.value = ""
    inpT.value = ""
    inpE.value = ""
})