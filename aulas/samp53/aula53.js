class Carro {
    constructor (tipo, estagioTurbo) {
        this.turbo = new Turbo (estagioTurbo)
        switch(tipo) {
            case 1:
                this.velMax = 120
                this.nome = "Corsa"
                break
            case 2:
                this.velMax = 160
                this.nome = "Vectra"
                break
            case 3: 
                this.velMax = 200
                this.nome = "Lancer Evo"
                break
        }
        this.velMax += this.turbo.potencia
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade: ${this.velMax}`)
        console.log("---------------------")
    }
}

class Turbo {
    constructor (e) {
        switch (e) {
            case 0:
                this.potencia = 0
                break
            case 1:
                this.potencia = 50
                break
            case 2:
                this.potencia = 75
                break
            case 3:
                this.potencia = 100
                break
        }
    }
}

class Formula1 extends Carro {
    constructor (estagioTurbo) {
        super(4, estagioTurbo)
        this.velMax = 300
        this.velMax += this.turbo.potencia
        this.nome = "Mclaren"
    }
}

const c1 = new Carro (1, 0)
const c2 = new Carro (2, 1)
const c3 = new Carro (3, 2)
const c4 = new Formula1 (3)

c1.info()
c2.info()
c3.info()
c4.info()