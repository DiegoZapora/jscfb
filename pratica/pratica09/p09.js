const pTimer = document.getElementById("timer")
const btnI = document.getElementById("btnIniciar")
const btnP = document.getElementById("btnParar")
const btnZ = document.getElementById("btnZerar")
const caixaParcial = document.getElementById("parcial")
const btnParcial = document.getElementById("btnParcial")
const parcialSalva = document.getElementById("parcialSalva")

let intervalo = null
let atual = null
let parical = null

const agoraTimer = () => {
    let agora = Date.now()
    let cont =  agora-atual
    let seg = Math.floor(cont / 1000)

    pTimer.innerHTML = converte(seg)
}

const converte = (seg) => {
    let hora = Math.floor(seg/3600)
    let resto = seg%3600
    let minuto = Math.floor(resto/60)
    let segundo = Math.floor(resto%60)

    let horaF = hora<10?"0"+hora:hora
    let minutoF = minuto<10?"0"+minuto:minuto
    let segundoF = segundo<10?"0"+segundo:segundo

    const format = `${horaF}:${minutoF}:${segundoF}`
    parical = format
    return format
}


btnI.addEventListener("click", () => {
    atual = Date.now()
    intervalo = setInterval(agoraTimer, 1000)
})

btnP.addEventListener("click", () =>  {
    clearInterval(intervalo)
})

btnZ.addEventListener("click", () => {
    clearInterval(intervalo)
    pTimer.innerHTML = "00:00:00"
})

btnParcial.addEventListener("click", () => {
    let p = document.createElement("p")
    p.setAttribute("class", "parcial")
    p.innerHTML = `${parical} <br/>`
    caixaParcial.appendChild(p)
    salvaParcial()
})

const salvaParcial = () => {
    localStorage.setItem("parcial", parical)
}

const carregaParcial = () => {
    let salvo = localStorage.getItem("parcial")
    salvo.length
    console.log(salvo)
    if (salvo.length === null) {
        parcialSalva.innerHTML = "Nenhuma Parcial Salva."
    } else {
        parcialSalva.append(salvo)
    }
}

carregaParcial()