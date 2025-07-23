class CarroPadrao {
    constructor () {
        if (this.constructor === CarroPadrao) {
            throw new TypeError ("ERRO! ESSA CLASSE NÃO PODE SER INSTANCIADA!")
        }
        if (this.turbo === undefined) {
            throw new TypeError ("ERRO! ESTA CLASSE PRECISA CONTAR UM METODO 'TURBO'!") 
        }
        this.rodas = 4
    }
}

class Carro extends CarroPadrao {
    constructor (tipo) {
        super()
        switch (tipo) {
            case 1:
                this.nome = "Corsa"
                break
            case 2:
                this.nome = "Vectra"
                break
            case 3:
                this.nome = "Lancer Evo"
                this.turbinado = true
                break
            case 4:
                this.nome = "Buggie"
                this.rodas = 3
        }
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Rodas: ${this.rodas}`)
        console.log(`Turbo: ${(this.turbinado?"Contem":"Não")}`)
        console.log("--------------------------------")
    }

    turbo () {
        this.turbinado = false
    }
}

let c1 = new Carro(4)
let c2 = new Carro(3)

c1.info()
c2.info()