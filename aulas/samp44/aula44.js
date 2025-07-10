class Andre {
    constructor(pnome, psobrenome) {
        this.nome = pnome
        this.sobrenome = psobrenome
    }
}

let p1 = new Andre("Andre")
let p2 = new Andre("Coelho", "Matos")
let p3 = new Andre("bosta")

console.log(p1.nome)
console.log(p2.sobrenome)