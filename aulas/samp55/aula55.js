const copy = document.getElementById("copy")
const btnC = document.getElementById("BTN-COPY")
const btnColar = document.getElementById("btnColar")
const colar = document.getElementById("colar")

btnC.addEventListener("click", () => {
    navigator.clipboard.writeText(copy.value)
    window.alert("Copiado para area de tranferencia.")
})