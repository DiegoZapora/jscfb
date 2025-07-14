class Musicas {
    Musico = "Andre Matos"
    constructor (pnome, palbum) {
        this.nome = pnome
        switch (palbum) {
            case 1:
                this.album = "Soldiers of Sunrise"
                break
            case 2:
                this.album = "Theatre of Fate"
                break
            case 3:
                this.album = "Angels Cry"
                break
            default:
                this.album = "Time to be Free"
                break
        }
    }

    setNome (nome) {
        this.nome = nome
    } 
    setAlbum (album) {
        this.album = album
    }

    getInfo () {
        return [this.nome, this.album]
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Album: ${this.album}`)
        console.log(`Cantor: ${this.Musico}`)
        console.log("-----------------------")
    }
}

let m1 = new Musicas ("Nightmares", 1)
let m2 = new Musicas ("Moonlight", 2)
let m3 = new Musicas ("Time", 3)
let m4 = new Musicas ("A New Moonlight", 4)

m1.setNome("For Tomorrow")
m1.setAlbum("Ritual")

m1.info()
m2.info()
m3.info()
m4.info()

console.log(m1.getInfo())