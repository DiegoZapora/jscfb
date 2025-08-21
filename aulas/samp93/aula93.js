import {Caixa} from '../samp92/mostrar.js'

const inpN = document.getElementById("inpNome")
const inpS = document.getElementById("inpSenha")
const btnL = document.getElementById("btnLogin")

let logado = false
let matlogado = null
let nomelogado = null
let acessologado = null

const naoLogin = () => {
    const config = {
        cor: "#048",
        tipo: "ok"
    }
    Caixa.mostrarCX(config, "Login não efetuado!", "Usuario ou senha não encontrados, verifique as informações e tente novamente.")
}

const verifLogin = () => {
    let mat = inpN.value
    let pas = inpS.value

    let endPoint = `http://localhost:8080/?matricula=${mat}&senha=${pas}`
    fetch(endPoint)
    .then(res => res.json())
    .then(res => {
        if (res) {
            logado = true
            matlogado = mat
            nomelogado = res.nome
            acessologado = res.acesso
            location.href="https://diegozapora.github.io/jscfb/pratica/pratica09/p09.html"
        } else {
            logado = false
            matlogado = null
            nomelogado = null
            acessologado = null
            naoLogin()
        }
    })
}

btnL.addEventListener("click", () => {
    verifLogin()
})