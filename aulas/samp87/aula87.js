const imgC = document.getElementById("imgC")
const btnF = document.getElementById("btnFetch")
const btnP = document.getElementById("btnPost")

const cachorro = () => {
    const endPoint = "https://dog.ceo/api/breeds/image/random"
    fetch(endPoint)
    .then(res => res.json())
    .then(dados => {
    console.log(dados)
    imgC.style.width = "300px"
    imgC.style.backgroundSize = "cover"
    imgC.style.backgroundPosition = "center center"
    imgC.src = dados.message
    })
}

btnF.addEventListener("click", () => {
    setInterval(cachorro, 1000)
})

let dados = {
    nome: "Andre",
    banda: "Shaman",
    album: "Reason"
}

let cabeca = {
    method: "POST",
    body: JSON.stringify(dados)
}

const gravar = () => {
    const endPoint = "https://samp.com.br"
    fetch(endPoint, cabeca)
    .then(res => res.json())
    .then(ret => {
        console.log(ret)
    })
}

btnP.addEventListener("click", () => {
    gravar()
})