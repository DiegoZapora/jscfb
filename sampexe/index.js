let sec1 = document.getElementById("sec1")
let sec2 = document.getElementById("sec2")
let btn = document.getElementById("btn")

btn.addEventListener("click", () =>{
    if (sec1.style.display === "block") {
        sec1.style.display = "none"
        sec2.style.display = "block"
    } else {
        sec1.style.display = "block"
        sec2.style.display = "none"
    }


})