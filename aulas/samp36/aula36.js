const p_array = document.getElementById("array")
const btnV = document.getElementById("btnVerif")
const res = document.getElementById("resultado")

const sas = [47,54,19,20,12]
p_array.innerHTML = `[${sas}]`

btnV.addEventListener("click", () => {
    sas.some((e,i) => {
        if (e < 18) {
            res.innerHTML = `Elemento encontrado na posição ${i}`
            return e
        } else {
            res.innerHTML = `Nenhum elemento encontrado.`
            return
        }
    })
})