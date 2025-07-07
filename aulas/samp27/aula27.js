const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn = document.getElementById("btnCopiar")
const voltar = document.getElementById("btnVoltar")
const todos = [...document.querySelectorAll(".musicas1")]

todos.map((e) => {
    e.addEventListener("click", (evt) => {
        const samp = evt.target
        samp.classList.toggle("selecionado")
    })
})

btn.addEventListener("click", () => {
    const musicasSelecionadas = [...document.querySelectorAll(".selecionado")]
    musicasSelecionadas.map((e) => {
        caixa2.appendChild(e)
    })
})

voltar.addEventListener("click", () => {
    const naoSelecioadas = [...caixa2.querySelectorAll(".musicas1:not(.selecionado)")]
    naoSelecioadas.map((el) => {
        caixa1.appendChild(el)
    })
})