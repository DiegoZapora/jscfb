let Musica = {
    nome: "Mentalize",
    album: "Mentalize",
    cantor: "Andre Matos",
    info: function() {
        console.log(`Nome: ${Musica.nome}, Album: ${Musica.album}, Cantor: ${Musica.cantor}`)
    }
}

Musica.info()

let smap = Object.create(Musica)
smap.nome = "Time to be Free"
smap.album = "Time to be Free"
smap.cantor = "Andre Matos"
console.log(`Nome: ${smap.nome}, Album: ${smap.album}, Cantor: ${smap.cantor}`)

Musica["tempoMusica"]= "4:06"
Musica.baterista = "Eloy"

const musicas = [
    {
        nome: "Mirror of Me",
        album: "Mentalize",
        cantor: "Andre Matos",
        tempoMusica: "4:18",
        baterista: "Eloy"
    },
    {
        nome: "A New Moonlight",
        album: "Time to be Free",
        cantor: "Andre Matos",
        tempoMusica: "8:58",
        baterista: "Rodrigo"
    },
    {
        nome: "Stop!",
        album: "The Turn of The Lights",
        cantor: "Andre Matos",
        tempoMusica: "5:11",
        baterista: "Samp"
    }
]



musicas.forEach((e) => {
    console.log(`Nome: ${e.nome}, Album: ${e.album}, Cantor: ${e.cantor} ,Tempo da Musica: ${e.tempoMusica}, Baterista: ${e.baterista}`) 
})

let dados = {
    nome: "Andre",
    idade: 47,
    velho: (bmrp) => {
        console.log(bmrp)
    }
}

dados.velho(dados.idade)