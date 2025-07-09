const caixa = document.getElementById("caixa")

let valores = [1, 2, 3, 4, 5]
const op = [
    (val) => {
        let res = 0
        for (let v of val) {
            res = v + res
        }
        return res
    }, 
    (val) => {
        let res = 1
        for (let v of val) {
            res = v * res
        }
        return res
    },
    (val) => {
        for (v of val) {
            console.log(v)
        }
    }
]

console.log(op[0](valores))
console.log(op[1](valores))
op[2](valores)

op.map((e) => {
    let p = document.createElement("p")
    p.innerHTML = op[0]
    caixa.appendChild(p)
})


