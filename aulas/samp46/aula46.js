const mNome = document.getElementById("f_nome")
const mAlbum = document.getElementById("f_album")
const btnA = document.getElementById("btnADD")
const res = document.getElementById("res")

class Musicas {
    constructor (pnome, palbum) {
        this.nome = pnome
        this.album = palbum
    }

    getNome () {
        return this.nome
    }

    getAlbum () {
        return this.album
    }
}

let musicas = []

const ADD = () => {
    res.innerHTML = ""
    musicas.map((e) => {
        const div = document.createElement("div")
        div.innerHTML = `Nome: ${e.getNome()}<br/>Album: ${e.getAlbum()}<br/>-----------------`
        res.appendChild(div)
    })
}

btnA.addEventListener("click", () => {
    let m1 = new Musicas(mNome.value, mAlbum.value)
    musicas.push(m1)
    mNome.value = ""
    mAlbum.value = ""
    mNome.focus()
    ADD()
})