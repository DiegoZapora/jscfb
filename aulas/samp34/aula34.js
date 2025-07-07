const p_array = document.querySelector("#array")
const pesquisar = document.getElementById("pesquisar")
const btnP = document.getElementById("btnPesquisar")
const res = document.getElementById("resultado")

const sas = [47,54,19,20,71,19,25]
p_array.innerHTML = "[" + sas + "]"

btnP.addEventListener("click", () => {
    sas.find((e,i) => {
        if (pesquisar.value == e) {
            res.innerHTML = `O valor: ${e}, foi encontrado na posição: ${i}`
            return e
        } else {
            res.innerHTML = `Valor não encontrado! Digite um valor valido!`
            return
        }
    })
})