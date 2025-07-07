let n = 0
let max = 1000
let par = 0


for (let i = n; i < max; i++) {
    console.log(`Andre Matos - ${i}`)
    if (i%2==0) {
        continue
    }
    par++
}

console.log("SAMP")
console.log(`Quantidade de pares: ${par}`)





/*while (n < max) {
    console.log(`Andre Matos - ${n}`)
    if (n > 500) {
        break
    }
    n++
}
console.log("Samp")*/