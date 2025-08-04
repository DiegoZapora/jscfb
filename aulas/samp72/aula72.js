class Jogador {
    constructor(nome) {
        this.id = Symbol()
        this.nome = nome
    }
}

let jogadores = [new Jogador("Musa"), new Jogador("Jesus"), new Jogador("Jesus Junior"), new Jogador("Supla")]

let s = []

let samp = jogadores.filter((e) => {
    return e.nome == "Musa"
})

s = samp.map((e) => {
    return e.id
})

console.log(s)
console.log(jogadores)