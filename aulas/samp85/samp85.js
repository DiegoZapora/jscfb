const btnV = document.getElementById("btnValidar")
const inpN = document.getElementById("inpNome")
const inpNota = document.getElementById("inpNota")
const res = document.getElementById("res")

btnV.addEventListener("click", (evt) => {
    
    if (inpNota.checkValidity() === false) {
        inpNota.classList.add("invalido")
        inpNota.reportValidity()
        inpNota.focus()
    } else {
        inpNota.classList.remove("invalido")
    }

    if (inpN.checkValidity() === false) {
        inpN.classList.add("invalido")
        inpN.reportValidity()
        inpN.focus()
    } else {
        inpN.classList.remove("invalido")
    }

    evt.preventDefault()
})