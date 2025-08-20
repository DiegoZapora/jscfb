class Login {
    static logado = false
    static matlogado = null
    static nomelogado = null
    static acessologado = null
    static endPoint = "http://localhost:8080/"

    static login = (mat, pas) => {
        this.endPoint += `?matricula=${mat}&senha=${pas}`;
        fetch(this.endPoint)
        .then(res => res.json())
        .then(res => {
            if (res) {
                this.logado = true
                this.matlogado = mat
                this.nomelogado = res.nome
                this.acessologado = res.acesso
                console.log(res)
            } else {
                console.log("Usuario ou Senha não encontrados.")
            }
        })
    }
}

export {Login}