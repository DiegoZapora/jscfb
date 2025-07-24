let prometa = new Promise((ok, nao) => {
    let resultado = false
    let tempo = 3000
    setTimeout(() => {
        if (resultado == true) {
            ok("Deu tudo certo")
        } else {
            nao("Deu tudo errado mermao")
        }
    }, tempo)
})

prometa.then((res) => {
    console.log(res)
})
prometa.catch((retorno) => {
    console.log(retorno)
})

console.log("Processando...")