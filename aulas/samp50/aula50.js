const Musicas = {
    nome: "Mentalize",
    album: "Mentalize",
    cantor: "Andre Matos",
    idade: {
        morte: 47,
        ritual: 25
    }
}

const stingJson = '{"nome":"Mentalize","album":"Mentalize","cantor":"Andre Matos","idade":{"morte":47,"ritual":25}}'

const sJson = JSON.stringify(Musicas)
const oJson = JSON.parse(stingJson)

console.log(sJson)
console.log(oJson)