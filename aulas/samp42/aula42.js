const caixa = document.getElementById("caixa")

let musicas = new Set(["Holy Land"])

musicas.add("Mentalize")
musicas.add("Time to be Free")
musicas.add("A New Moonlight")
musicas.add("1")
musicas.add("1")
musicas.add("Ritual")

console.log(musicas)

musicas.forEach((e) => {
    caixa.innerHTML += `${e}<br/>`
})

console.log(musicas)