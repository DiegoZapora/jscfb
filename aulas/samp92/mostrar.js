class Caixa {
    static cor = "#48f"
    static destino = null
    static divMsg = null
    static tipo = null
    static comandoS = null

    static mostrarCX = (config, titulo, texto) => {
        this.destino = document.body
        this.cor = config.cor
        this.comandoS = () => {config.comandoS()} 
        this.tipo = config.tipo
        this.titulo = titulo
        this.texto = texto
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
            background-color: rgba(0,0,0,0.7);
            z-index: 99999999999;`
        this.divMsg.setAttribute("id", "divMsg")
        this.divMsg.setAttribute("style", estilosDivMSG)
        this.destino.prepend(this.divMsg)

        const caixaMSG = document.createElement("div")
        const caixaMsgEstilo = 
            `display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            width: 300px;
            height: auto;`
        caixaMSG.setAttribute("style", caixaMsgEstilo)
        this.divMsg.appendChild(caixaMSG)

        const caixaTitulo = document.createElement("div")
        caixaTitulo.innerHTML = this.titulo
        const caixaTituloEstilo = 
            `display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: auto;
            background-color: ${this.cor};
            color: white;
            border-radius: 5px 5px 0px 0px;
            padding: 5px;`
        caixaTitulo.setAttribute("style", caixaTituloEstilo)
        caixaMSG.appendChild(caixaTitulo)

        const caixaTexto = document.createElement("div")
        caixaTexto.innerHTML = this.texto
        const caixaTextoEstilo = 
            `display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: 40px;
            background-color: white;
            color: black;
            padding: 5px;
            height: auto;`
        caixaTexto.setAttribute("style", caixaTextoEstilo)
        caixaMSG.appendChild(caixaTexto)

        const caixaFooter = document.createElement("div")
        const btnNao = document.createElement("button")
        btnNao.innerHTML = "Ok"
        caixaFooter.appendChild(btnNao)
        const caixaFooterEstilo = 
            `display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 40px;
            background-color: ${this.cor};
            color: white;
            padding: 5px;
            border-radius: 0px 0px 5px 5px;
            height: auto;`

        const btnEstilo = 
            `width: 100px;
            height: 25px;
            cursor: pointer;
            border: 1px solid black;
            border-radius: 5px;`
        caixaFooter.setAttribute("style", caixaFooterEstilo)
        btnNao.setAttribute("style", btnEstilo)
        btnNao.addEventListener("click", () => {
            this.ocultarCX()
        })
        caixaMSG.appendChild(caixaFooter)
    }

    static ocultarCX = () => {
        this.divMsg.remove()
    }
}

export {Caixa}