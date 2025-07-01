const caixaMusicas = document.querySelector("#caixaMusica")
const musicas = ["Mentalize", "Letting Go", "For Tomorrow", "Rio", "Endeavour", "Holy Land", "Moonlight"]
const btnSelecioado = document.getElementById("btnMusicaSelecioado")
let nomeMusica = document.getElementById("nomeMusica")

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

btnSelecioado.addEventListener("click", (evt) => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let radioSeleciodo = todosRadios.filter((e) => {
        return e.checked
    })

    radioSeleciodo=radioSeleciodo[0]
    const musicaSelecioado = radioSeleciodo.parentNode.parentNode.firstChild.textContent

    nomeMusica.value = musicaSelecioado
})