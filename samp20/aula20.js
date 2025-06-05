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