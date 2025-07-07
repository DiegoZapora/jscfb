/*const oi=["Oi", "Samp"]
oi.map((el) => {
    return el.length
})

console.log(oi)*/

const sas = ["Time to be Free", "Holy Land", "Mentalize", "Ritual", "Reason"]
const samp = sas.map((el) => {
    return el.toUpperCase()
})

console.log(samp)

const numeros = [1, 2, 3]
const dobrado = numeros.map((el) => {
    return el*2
})
console.log(dobrado)

const albuns = ["Mentalize", "Holy Land", "SAMP"]
const format = albuns.map((el, i) => {
    return `${i + 1}. ${el}`
})

console.log(format)