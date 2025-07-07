const caixaMusicas = document.querySelector("#caixaMusica")
const musicas = ["Mentalize", "Letting Go", "For Tomorrow", "Rio", "Endeavour", "Holy Land", "Moonlight"]
const btnSelecioado = document.getElementById("btnMusicaSelecioado")
const btnRemove = document.getElementById("btnRemoveMusica")

musicas.map((e, i) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + [i+1])
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = e

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type" , "radio")
    rb.setAttribute("name" , "rb_musica")
    
    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixaMusicas.appendChild(novoElemento)
})

const RadioSelecionado=()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSeleciodo = todosRadios.filter((e) => {
        return e.checked
    })

    return radioSeleciodo[0]
}

btnSelecioado.addEventListener("click", () => {
    const musicaSelecionada = RadioSelecionado()
    if (musicaSelecionada != undefined) {
        const MS = musicaSelecionada.parentNode.parentNode.textContent
        alert(`Musica Selecionada: ${MS}`)
    } else {
        alert("NENHUMA MUSICA SELECIONADA")
    }
    
})

btnRemove.addEventListener("click", () => {
    const remove = RadioSelecionado()
    if (remove != undefined) {
        const removeMusica = remove.parentNode.parentElement
        removeMusica.remove()
    } else {
        alert("NENHUMA MUSICA SELECIONADA")
    }
})