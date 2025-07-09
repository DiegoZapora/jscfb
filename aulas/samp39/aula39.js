let caixa = document.getElementById("caixa")

const nomes = ["Andre", "Matos", ["Hugo", "Luiz"]]
const musicas = ["Time to be Free", "Mentalize", "A New Moonlight", nomes]

console.log(musicas[3][2][1])

musicas.map((e) => {
    let p = document.createElement("p")
    p.innerHTML = e
    caixa.appendChild(p)
})