const Nave = function (energia) {
    this.energia = energia
    this.disparos = 2
}

const n1 = new Nave (100)

Nave.prototype.vidas = 3
Nave.prototype.desparar = function () {
    if (this.disparos > 0) {
        this.disparos--
    }
}

console.log(Nave)
console.log(n1)
console.log(n1.vidas)
console.log(n1.disparos)

n1.desparar()

console.log(n1.disparos)