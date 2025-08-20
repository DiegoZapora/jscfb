import {Login} from "./login.js";

let logado = false
let matlogado = null
let nomelogado = null
let acessologado = null
let endPoint = "http://localhost:8080/"

const login = (mat, pas) => {
    endPoint += `?matricula=${mat}&senha=${pas}`;
    fetch(endPoint)
    .then(res => res.json())
    .then(res => {
        if (res) {
            logado = true
            matlogado = mat
            nomelogado = res.nome
            acessologado = res.acesso
            console.log(res)
        } else {
            console.log("Usuario ou Senha não encontrados.")
        }
    })
}

login("andre", "matos")