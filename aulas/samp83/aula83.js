let numeros = [10,20,30,40,50,60,70,80,90]
let [a,b,c,...d] = numeros

let obj = {musica:"Mentalize", Album:"Mentalize", cantor: "Andre", samp: "Laufey"}

let {musica, Album, ...cantor} = obj

console.log(musica)
console.log(Album)
console.log(cantor)

const albuns = () => {
    return ["Mentalize", "Holy Land", "Endevour", "Rio"]
}

let [m1,m2,,m3] = albuns()

let texto = "Andre Matos"

let [...t] = texto.split(" ")
console.log(t)