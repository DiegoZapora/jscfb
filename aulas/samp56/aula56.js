const btnE = document.getElementById("btn")
const container = document.querySelector(".main")
const btnV = document.getElementById("btnV")

btnE.addEventListener("click", () => {
    container.classList.toggle("container_exibir")

    if (container.classList.contains("container_exibir")) {
        btnV.style.display = "block"
        btnE.style.display = "none"
    } else {
        btnV.style.display = "none"
        btnE.style.display = "block"
    }
})

btnV.addEventListener("click", () => {
    container.classList.toggle("container_exibir")

    if (container.classList.contains("container_exibir")) {
        btnV.style.display = "block"
        btnE.style.display = "none"
    } else {
        btnV.style.display = "none"
        btnE.style.display = "block"
    }
})