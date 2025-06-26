const caixa1 = document.querySelector("#caixa1")
const btnM1 = document.querySelector("#m1")
const todos = [...document.querySelectorAll(".musicas")]


caixa1.addEventListener("click", () => {
    console.log("SAMP")
})

todos.map((e) => {
    e.addEventListener("click", (evt) => {
        evt.stopPropagation()
    })
})