const samp = document.getElementById("samp")
const btn = document.getElementById("btnsamp")
const bosta = document.getElementById("cont")

btn.addEventListener("click", () => {
    samp.innerHTML = "Processando..."
    let prometa = new Promise((ok, nao) => {
        let resultado = true
        let tempo = 3000
        setTimeout(() => {
            if (resultado) {
                ok("Deu tudo certo")
            } else (
                nao("Deu tudo errado mermao")
            )
        }, tempo)
    })
    prometa.then((res) => {
        samp.innerHTML = res
    })
    prometa.catch((res) => {
        samp.innerHTML = res
    })
})

samp.innerHTML = "Esperando"