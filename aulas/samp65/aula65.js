const obj = document.getElementById("objetos")

let Musica = {
    nome: "Mentalize",
    album: "Mentalize",
    cantor: "Andre Matos",
    info: function() {
        obj.innerHTML = `Nome: ${this.nome}, Album: ${this.album}, Cantor: ${this.cantor}, Tempo da Musica: ${this.tempoMusica}, Baterista: ${this.baterista}`
    }
}

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

//Musica.info()

musicas.forEach((e) => {
    let novo = document.createElement("p")
    novo.innerHTML = `Nome: ${e.nome}, Album: ${e.album}, Cantor: ${e.cantor} ,Tempo da Musica: ${e.tempoMusica}, Baterista: ${e.baterista}`
    obj.appendChild(novo)
})