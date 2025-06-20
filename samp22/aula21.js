/*const oi=["Oi", "Samp"]
oi.map((el) => {
    return el.length
})

console.log(oi)

const albuns = ["Time to be Free", "Holy Land", "Mentalize", "Ritual", "Reason"]
albuns.map((el) => {
    return el.toUpperCase()
})

console.log(albuns)*/

const numeros = [1, 2, 3]
const dobrado = numeros.map((el => {
    return el*2
}))

console.log(numeros)
console.log(dobrado)

const albuns = ["Mentalize", "Holy Land", "SAMP"]
const format = albuns.map((el, i) => {
    return `${i + 1}. ${el}`
})

console.log(albuns)
console.log(format)