const lati = document.getElementById("lati")
const long = document.getElementById("long")

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(mostrar, erro)

} else {
    console.log("NAO")
}

function mostrar(pos) {
    long.innerHTML = pos.coords.longitude
    lati.innerHTML = pos.coords.latidude
}

function erro() {
    long.innerHTML = "Voce é um lixo"
    lati.innerHTML = "Seu merda"
}