class NPC {
    static alerta = false
    constructor (energia) {
        this.energia = energia
    }

    info = function () {
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(NPC.alerta?"Sim":"Não")}`)
        console.log("----------------------------")
    }
}

const npc1 = new NPC (100)
const npc2 = new NPC (50)
const npc3 = new NPC (10)

NPC.alerta = true

npc1.info()
npc2.info()
npc3.info()