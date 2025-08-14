const text = document.getElementById("text")

const endPoint = "Andre.txt"
fetch(endPoint)
.then(res => res.json())
.then(ret => {
    text.innerHTML = `Nome: ${ret.nome}, Album: ${ret.album}, Musica: ${ret.musica}`
})
.catch(erro => {
    text.innerHTML = `ERRO AO CONSUMIR A API! ERRO ${erro}`
})