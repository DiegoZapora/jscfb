const f = new Function ("v1", "v2", "v3", "return v1+v2+v3")  /* FUNCAO ANONIMA DE CONSTRUTOR */

console.log(f(15,5,5))

/*const f = function (...valores) {               FUNCAO ANONIMA NORMAL
    let res = 0
    for (let v of valores) {
        res = res + v
    }

    return res
}

console.log(f(15,5))*/