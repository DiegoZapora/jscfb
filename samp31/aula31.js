const caixa1 = document.querySelector("#caixa1")
const btnM = [...document.querySelectorAll(".musicas")]
const c1_2 = document.querySelector("#m1_2")
const musics = ["Carry On", "For Tomorrow", "Mentalize", "Fairy Tale", "A New Moonlight", "Moonlight", "To Live Again"] 
const btn = document.getElementById("manda")
const caixa2 = document.getElementById("caixa2")
const texto = document.getElementById("texto").innerText


musics.map((e, i) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "m" + [i+1])
    novoElemento.setAttribute("class", "musicas")
    novoElemento.innerHTML = e

    const btn = document.createElement("img")
    btn.setAttribute("src", "300.png")
    btn.setAttribute("class", "andre")
    btn.addEventListener("click", () => {
        caixa1.removeChild(novoElemento)
    })
    novoElemento.appendChild(btn)

    caixa1.appendChild(novoElemento)
})

btn.addEventListener("click", () => {
    const novaTarefa = document.createElement("div")
    novaTarefa.setAttribute("class", "musicas")
    novaTarefa.innerHTML = texto
    caixa2.appendChild(novaTarefa)
})

