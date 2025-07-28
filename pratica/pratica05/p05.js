const R = document.getElementById("div_relogio")

const relegio= () => {
    const data = new Date ()

    let hora = data.getHours()
    hora = hora < 10 ? "0" + hora : hora
    
    let minutos = data.getMinutes()
    minutos = minutos < 10 ? "0" + minutos : minutos

    let segundos = data.getSeconds()
    segundos = segundos < 10 ? "0" + segundos : segundos

    const tempo = `${hora}:${minutos}:${segundos}`

    R.innerHTML = tempo
}

const intervalo = setInterval(relegio, 1000)

relegio()