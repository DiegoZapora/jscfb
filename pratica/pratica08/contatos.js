let contato = {
    addContato:function (novoContato, novoDOM) {
        const novo = document.createElement("div")

        const pNome = document.createElement("p")
        pNome.innerHTML = novoContato.nome

        const pTele = document.createElement("p")
        pTele.innerHTML = novoContato.tele

        const pEmail = document.createElement("p")
        pEmail.innerHTML = novoContato.email

        novo.appendChild(pNome)
        novo.appendChild(pTele)
        novo.appendChild(pEmail)

        novoDOM.appendChild(novo)
    }

}

export default contato