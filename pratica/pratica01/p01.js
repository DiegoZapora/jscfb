let inp_1 = document.getElementById("inp1")
let inp_2 = document.getElementById("inp2")
let S = document.getElementById("mais")
let X = document.getElementById("vezes")
let M = document.getElementById("menos")
let D = document.getElementById("divisao")
let res = document.getElementById("res")

const operacoes = [
    (v1, v2) => {
        return v1 + v2
    },

    (v1, v2) => {
        return v1 * v2
    },

    (v1, v2) => {
        return v1 - v2
    },

    (v1, v2) => {
        return v1 / v2
    }
]

S.addEventListener("click", () => {
    const valores = [Number(inp_1.value), parseInt(inp_2.value)]
    const resul = operacoes[0](...valores)
    res.innerHTML = resul
})

X.addEventListener("click", () => {
    const valores = [Number(inp_1.value), parseInt(inp_2.value)]
    const resul = operacoes[1](...valores)
    res.innerHTML = resul
})

M.addEventListener("click", () => {
    const valores = [Number(inp_1.value), parseInt(inp_2.value)]
    const resul = operacoes[2](...valores)
    res.innerHTML = resul
})

D.addEventListener("click", () => {
    const valores = [Number(inp_1.value), parseInt(inp_2.value)]
    const resul = operacoes[3](...valores)
    res.innerHTML = resul
})