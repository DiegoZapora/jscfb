const body = document.body
const head = document.head

let estilo = '<link rel="stylesheet" href="topo.css"></link>'
head.innerHTML += estilo

let topo = document.createElement("header")
topo.setAttribute("id", "topo")
topo.setAttribute("class", "topo")
body.prepend(topo)

let logo = 
    `<div id='logo' class='logo'>
        <img src='aurora.jpg'/>
        <h1>Aurora</h1>
    </div>`
topo.innerHTML += logo