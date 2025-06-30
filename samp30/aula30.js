const caixa1 = document.querySelector("#caixa1")
const btnM = [...document.querySelectorAll(".musicas")]
const c1_2 = document.querySelector("#m1_2")
const musics = ["Carry On", "For Tomorrow", "Mentalize", "Fairy Tale", "A New Moonlight", "Moonlight", "To Live Again"] 


musics.map((e, i) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "m" + [i+1])
    novoElemento.setAttribute("class", "musicas")
    novoElemento.innerHTML = e
    caixa1.appendChild(novoElemento)
})