class Andre {
    constructor(pnome, psobrenome, pidade) {
        this.nome = pnome
        this.sobrenome = psobrenome
        this.idade = pidade
    }
}

let p1 = new Andre("Andre")
let p2 = new Andre("Coelho", "Matos")
let p3 = new Andre("Andre", "Coelho", 47)

console.log(p1.nome)
console.log(p2.sobrenome)
console.log(p3.idade)