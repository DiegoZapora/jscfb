const sas = [...document.getElementsByTagName("div")]
sas.map((e,i) => {
    console.log(e.innerHTML)
})

const albuns = ["Time to be Free", "Holy Land", "Mentalize", "Ritual", "Reason"]
let c = albuns.map((el, i) => {
    return el
})

console.log(c)

const nome = (...albuns) => {
    let res = ""
    for (v of albuns) {
        res = albuns
    }
    return res
}

console.log(nome("TTBF", "HL"))
