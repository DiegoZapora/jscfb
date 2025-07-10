const caixa = document.getElementById("caixa")

let mapa = new Map()

mapa.set("Andre", "Matos")
mapa.set("Idade", 47)

mapa.delete("Idade")

/*f (mapa.has(pes)) {
    caixa.innerHTML = `A chave existe na coleção com o valor: ${mapa.get(pes)}`
} else {
    caixa.innerHTML = "Vai toma no cu"
}*/

mapa.forEach((e) => {
    console.log(e)
})