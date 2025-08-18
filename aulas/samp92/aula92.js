const config = {
    titulo: 'Andre Matos',
    texto: "Maestro do Heavy Metal",
    cor: "rgb(153, 169, 254)"
}

let c1 = new Caixa(config)

const btnM = document.getElementById("btnMostrar")

btnM.addEventListener("click", () => {
    c1.mostrarCX()
})