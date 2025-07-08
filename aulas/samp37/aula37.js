const p_array = document.getElementById("array")
const btnR = document.getElementById("btnReduz")
const res = document.getElementById("resultado")

const sas = [1,2,3,4,5]
p_array.innerHTML = `[${sas}]`

btnR.addEventListener("click", () => {
    let oi = sas.reduce((a,e) => {
        return a+e
    }, 0)
    res.innerHTML = oi
})