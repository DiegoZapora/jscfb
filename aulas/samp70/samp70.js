class Musica {
    static musicas = ["Mentalize", "Holy Land", "Carry On", "A New Moonlight"]

    static getTodosMusicas = () => {
        return this.musicas
    }   

    static getMusica = (i) => {
        return this.musicas[i]
    }

    static addCursos = (novo) => {
        this.musicas.push(novo)
    }
}

export {Musica}