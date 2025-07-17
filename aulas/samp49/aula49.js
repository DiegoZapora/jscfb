class Musicas { //classe pai
    constructor (nome, album) {
        this.nome = nome
        this.album = album
        this.vivo = false 
        this.anos = 47
        this.cantor = ""
    }

    Vida = function () {
        this.vivo = true
    }

    Morto = function () {
        this.vivo = false
    }

    setCantor = function (cantor) {
        this.cantor = cantor
    }
}

class Ritual extends Musicas {
    constructor (nome, album, ritualive, municao) {
        super(nome, album)
        this.ritualive = ritualive
        this.municao = municao
        this.cantor = "Andre Matos"
    }

    atirar = function () {
        if (this.municao > 0) {
            this.municao--
        }
    }
}

let c1 = new Musicas ("Mentalize", "Mentalize")
c1.Morto()
c1.setCantor("Andre Matos")

let c2 = new Ritual ("For Tomorrow", "Ritual", true, 50)
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Album: ${c1.album}`)
console.log(`Vivo: ${(c1.vivo?"Sim":"Não")}`)
console.log(`Anos: ${c1.anos}`)
console.log(`Cantor: ${c1.cantor}`)
console.log("--------------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Album: ${c2.album}`)
console.log(`Vivo: ${(c2.vivo?"Sim":"Não")}`)
console.log(`Anos: ${c2.anos}`)
console.log(`Ritualive: ${(c2.ritualive?"Teve":"Nao")}`)
console.log(`Municao: ${c2.municao}`)
console.log(`Cantor: ${c2.cantor}`)
console.log("--------------------------")