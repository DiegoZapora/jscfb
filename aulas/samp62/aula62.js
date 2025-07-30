const url = document.getElementById("url")
const btnU = document.getElementById("btnIr")

btnU.addEventListener("click", () => {
    //window.location = "https://diegozapora.github.io/jscfb/pratica/pratica07/p07.html"
    //window.location.assign("https://diegozapora.github.io/jscfb/pratica/pratica07/p07.html")
    //window.location.reload()
    //window.history.back()
    //window.history.forward()
    //alert(window.history.length)
    //window.history.go(1)
    window.location = url.value
})