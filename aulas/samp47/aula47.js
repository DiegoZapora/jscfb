function Musicas (pnome, palbum) {
    this.nome = pnome
    this.album = palbum

    this.getNome = () => {
        return this.nome
    },

    this.getAlbum = () => {
        return this.album
    },

    this.info = () => {
        console.log(`Nome: ${this.nome}`)
        console.log(`Album: ${this.album}`)
        console.log("-------------------")
    }
}

let m1 = new Musicas ("Moonlight", "Theatre of Fate")

m1.info()
console.log(m1.setNome())