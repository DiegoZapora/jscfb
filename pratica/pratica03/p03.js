const tipoMilitar = document.getElementById("f_tipoMilitar")
const tipoNormal = document.getElementById("f_tipoNormal")
const blindagem = document.getElementById("f_blindagem")
const municao = document.getElementById("f_municao")
const caixaCarros = document.getElementById("carros")
const nomeCarro = document.getElementById("f_nome")
const portasCarro = document.getElementById("f_portas")
const btnADD = document.getElementById("btnADD")

let carros = []

tipoMilitar.addEventListener("click", () => {
    blindagem.removeAttribute("disabled")
    municao.removeAttribute("disabled")
})

tipoNormal.addEventListener("click", () => {
    blindagem.setAttribute("disabled", "disabled")
    municao.setAttribute("disabled", "disabled")
    blindagem.value = 0
    municao.value = 0
})


class Carros {
    constructor (pNome, pPortas, tipo) {
        this.nome = pNome
        this.portas = pPortas
        this.tipo = tipo
    }
}

class Militar {
    constructor(nome, portas, blindagem, municao, tipo) {
        this.nome = nome
        this.portas = portas
        this.blindagem = blindagem
        this.municao = municao
        this.tipo = tipo
    }
}

const ADD = () => {
    caixaCarros.innerHTML = ""

    carros.map((e, index) => {
        let div = document.createElement("div")
        let btn = document.createElement("button")
        btn.addEventListener("click", () => {
            caixaCarros.removeChild(div)
            caixaCarros.removeChild(btn)
            carros.splice(index, 1)
        })
        if (tipoNormal.checked) {
            div.innerHTML = `Nome: ${e.nome} <br/> Portas: ${e.portas} <br/> Tipo: ${e.tipo} <br/> ----------------------`
        } else {
            div.innerHTML = `Nome: ${e.nome} <br/> Portas: ${e.portas} <br/> Blindagem: ${e.blindagem} <br/> Munição: ${e.municao} <br/> Tipo: ${e.tipo} <br/> ----------------------`
        }
        btn.innerHTML = "Remover"
        caixaCarros.appendChild(div)
        caixaCarros.appendChild(btn)
    })
}

btnADD.addEventListener("click", () => {
    if (nomeCarro.value == "" || portasCarro.value == 0) {
        window.alert("ERRO! FALTAM DADOS!")
        return
    } else if (tipoNormal.checked) {
        let c1 = new Carros (nomeCarro.value, portasCarro.value, tipo = "Normal")
        carros.push(c1)
        nomeCarro.value = ""
        portasCarro.value = 0
        nomeCarro.focus()
    } else {
        let m1 = new Militar (nomeCarro.value, portasCarro.value, blindagem.value, municao.value, tipo = "Militar")
        carros.push(m1)
        nomeCarro.value = ""
        portasCarro.value = 0
        blindagem.value = 0
        municao.value = 0
        nomeCarro.focus()
    }
    ADD()
})