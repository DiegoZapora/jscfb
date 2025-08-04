const nome = Symbol("nome")
const numero = Symbol()
const corUniforme = Symbol()

const Jogador = {
    [nome]: "Andre",
    [numero]: 71,
    [corUniforme]: "Amarelo e Preto"
}

for (p in Jogador) {
    console.log(p)
}

console.log(Jogador[nome], Jogador[numero], Jogador[corUniforme])