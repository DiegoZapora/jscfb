const divPalco = document.getElementById("palco")
const nObjs = document.getElementById("numObjetos")
const inpQtd = document.getElementById("qnt")
const btnA = document.getElementById("btnAdicionar")
const btnR = document.getElementById("btnRemover")

let largPalco = divPalco.offsetWidth
let altuPalco = divPalco.offsetHeight

let bolas = []
let numBolas = 0

class Bola {
    constructor (arrayBolas, palco) {
        this.tam = Math.floor(Math.random()*10)+10
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.x = Math.floor(Math.random()*(largPalco-this.tam))
        this.y = Math.floor(Math.random()*(altuPalco-this.tam))
        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+1
        this.direx = (Math.random()*10) > 5 ? 1 : -1
        this.direy = (Math.random()*10) > 5 ? 1 : -1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random()*1000000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar, 10)
        this.eu = document.getElementById(this.id)
        numBolas++
        nObjs.innerHTML = numBolas
    }

    minhaPos = () => {
        return this.arrayBolas.indexOf(this)
    }

    remover = () => {
        clearInterval(this.controle)
        bolas = bolas.filter((e) => {
            if (e.id != this.id) {
                return e
            }
        })
        this.eu.remove()
        numBolas--
        nObjs.innerHTML = numBolas
    }

    desenhar = () => {
        const div = document.createElement("div")
        div.setAttribute("id", this.id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", `left: ${this.x}px; top: ${this.y}px; width: ${this.tam}px; height: ${this.tam}px; background-color: rgb(${this.r}, ${this.g}, ${this.b});`)
        this.palco.appendChild(div)
    }

    colisao_borda = () => {
        if (this.x + this.tam >= largPalco) {
            this.direx = -1
        } else if (this.x <= 0) {
            this.direx = 1
        }

        if (this.y + this.tam >= altuPalco) {
            this.direy = -1
        } else if (this.y <= 0) {
            this.direy = 1
        }
    }

    controlar = () => {
        this.colisao_borda()
        this.x += this.direx * this.velx
        this.y += this.direy * this.vely
        this.eu.setAttribute("style", `left: ${this.x}px; top: ${this.y}px; width: ${this.tam}px; height: ${this.tam}px; background-color: rgb(${this.r}, ${this.g}, ${this.b});`)
        if ((this.x > largPalco) || (this.py > altuPalco)) {
            this.remover()
        }
    }

}

window.addEventListener("resize", (evt) => {
    largPalco = divPalco.offsetWidth
    altuPalco = divPalco.offsetHeight
})

btnA.addEventListener("click", () => {
    const quantidade = inpQtd.value
    for (let i = 0; i < quantidade; i++) {
        bolas.push(new Bola(bolas, palco))
    }
})

btnR.addEventListener("click", () => {
    this.remover()
})