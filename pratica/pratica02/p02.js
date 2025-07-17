const mNome = document.getElementById("f_nome")
const mAlbum = document.getElementById("f_album")
const btnA = document.getElementById("btnADD")
let res = document.getElementById("res")

let musicas = []

btnA.addEventListener("click", () => {
    const objMusicas = {
        nome: "",
        album: "",

        setNome: function (nome) {
            this.nome = nome
        },

        setAlbum: function (album) {
            this.album = album
        },

        getNome: function () {
            return this.nome
        },

        getAlbum: function () {
            return this.album
        }
    }

    if (mNome.value == "" || mAlbum.value == "") {
        window.alert("ERRO! FALTAM DADOS!")
        return
    } else {
        objMusicas.setNome(mNome.value)
        objMusicas.setAlbum(mAlbum.value)
        musicas.push(objMusicas)
        mNome.value = ""
        mAlbum.value = ""
        mNome.focus()
        ADD()
    }
})

const ADD = () => {
    res.innerHTML = ""
    musicas.map((e) => {
        let div = document.createElement("div")
        div.innerHTML = `Nome: ${e.getNome()} <br/> Album: ${e.getAlbum()} <br/> ---------------------------------`
        res.appendChild(div)
    })
}