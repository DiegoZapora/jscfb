const idade = [47,54,71,19,56,12,50]

const maior = idade.filter((v) => {
    if (v >= 18) {
        return v
    }
})

const menor = idade.filter((val) => {
    if (val < 18) {
        return val
    }
})
console.log(idade)
console.log(maior)
console.log(menor)