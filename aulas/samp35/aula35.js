const p_array = document.getElementById("array")
const btnV = document.getElementById("btnVerif")
const res = document.getElementById("resultado")

const sas = [47,54,19,20,12]
p_array.innerHTML = `[${sas}]`

btnV.addEventListener("click", () => {
    sas.every((e, i) => {
        if (e >= 18) {
            res.innerHTML = `O Array está conforme a regra.`
            return e
        }

        if (e < 18) {
            res.innerHTML = `O Array não está conforme a regra. Erro na posição ${i} com o valor ${e}`
        }
    })
})