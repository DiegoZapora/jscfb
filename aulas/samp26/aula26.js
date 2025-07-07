const cur = document.getElementById("c6")
const cursos = [...document.querySelectorAll(".curso")]

cur.addEventListener("click", () => {
    window.alert("ACERTOU")
})

cursos.map((e) => {
    e.addEventListener("click", () => {
        window.alert("ERROU")
    })
})

/*cur.addEventListener("click", (evt) => {
    console.log(evt.target)
})*/