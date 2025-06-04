function soma2(...valores) {                     /* FOR OF */
    let res = 0
    for (let v of valores){
        res = res + v
    }

    return res
}

console.log(soma2(15,5))

/*function soma(...valores) {                     FOR NORMAL
    let tamanho = valores.length
    let res = 0
    for (let i = 0; i < tamanho; i++) {
        res = res + valores[i]
    }

    return res
}

console.log(soma(10,5))*/