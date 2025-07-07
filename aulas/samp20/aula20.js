const soma=(...valores) => {
    const somar = (val) => {
        let res = 0
        for (let v of val) {
            res = res + v
        }
        return res
    }
    return somar(valores)
}

console.log(soma(15,5))

const nome = (...nomes) => {
    const andre = (viper) => {
        let res = 0
        for (v of viper) {
            res = res + v
        }
        return res
    }

    return andre(nomes)
}

console.log(nome(2025-2019))