const inpA = document.getElementById("inpAlarme")
const res = document.getElementById("res")
const btnA = document.getElementById("btnAtivar")
const btnP = document.getElementById("btnParar")
const R = document.getElementById("div_relogio")

let audio = new Audio("A Lapse in Time(M4A_128K).m4a")
audio.loop=-1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

const data = new Date()

btnA.addEventListener("click", () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (inpA.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    res.innerHTML += `${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`
})

btnP.addEventListener("click", () => {
    alarme_tocando = false
    alarme_ativado = false
    res.innerHTML = "Proximo alarme em: "
    inpA.value = ""
    audio.pause()
    audio.currentTime = 0
})

const relegio = () => {
    const data = new Date()

    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora
    
    let minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos

    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos

    const tempo = `${hora}:${minutos}:${segundos}`

    R.innerHTML = tempo

    if (alarme_ativado == true && !alarme_tocando) {
        if (data.getTime() >= ts_alarme) {
            alarme_tocando = true
            audio.play()
        }
    }
}

const intervalo = setInterval(relegio, 1000)

relegio()