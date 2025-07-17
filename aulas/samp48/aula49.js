const Musicas = {
    nome: "Mentalize",

    getNome: function () {
        return this.nome
    },

    setNome: function (nome) {
        this.nome = nome
    }
}

const m1 = Musicas
const m2 = Musicas

m1.nome = "Make Believe"

console.log(Musicas.nome)
console.log(m1.nome)