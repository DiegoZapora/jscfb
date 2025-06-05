function* contador() {
    i = 0
    while (true) {
        yield i++
        
    }
}

const itc = contador()
console.log(itc.next().value)

/*function* perguntas() {
    let nome = yield "Qual seu nome?"
    let album = yield "Qual seu album favorito do Andre Matos?"
    let music = yield "Qual sua musica favorita do Andre Matos?"
    return `Olá, ${nome}, seu album favorito é ${album} e sua musica favorita é ${music}`
}

const itc = perguntas()
console.log(itc.next().value)
console.log(itc.next("Samp").value)
console.log(itc.next("Time to be Free").value)
console.log(itc.next("A New Moonlight").value)
console.log(itc.next().done)*/

/*function* cores() {
    yield "Andre Matos"
    yield "SAMP"
    yield "8/6"
}

const itc = cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().done)*/