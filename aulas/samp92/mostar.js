class Caixa {
    titulo = null
    texto = null
    cor = null
    destino = null
    divMsg = null

    constructor(config) {
        this.titulo = config.titulo
        this.texto = config.texto
        this.cor = config.cor
        this.destino = document.body
    }

    mostrarCX = () => {
        this.divMsg = document.createElement("div")
        let estilosDivMSG = 
            `display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            background-color: rgba(0,0,0,0.7);`

        this.divMsg.setAttribute("id", "divMsg")
        this.divMsg.setAttribute("style", estilosDivMSG)
        this.destino.prepend(this.divMsg)

        const caixaMSG = document.createElement("div")
        const caixaMsgEstilo = 
            `display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            width: 300px;`

        caixaMSG.setAttribute("style", caixaMsgEstilo)
        this.divMsg.appendChild(caixaMSG)

        const caixaTitulo = document.createElement("div")
        caixaTitulo.innerHTML = this.titulo
        const caixaTituloEstilo = 
            `display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: 40px;
            background-color: ${this.cor};
            color: white;
            border-radius: 5px 5px 0px 0px;
            padding: 5px;`

        caixaTitulo.setAttribute("style", caixaTituloEstilo)
        caixaMSG.appendChild(caixaTitulo)
    }

    ocultarCX = () => {

    }
}