let n1 = [10,20,30]
let n2 = [11,22,33,44,55]
let n3 = [...n1,...n2]

console.log(`n1: ${n1}`)
console.log(`n2: ${n2}`)
console.log(`n3: ${n3}`)

const soma=(v1,v2,v3) => {
    return v1+v2+v3
}

let valores = [1,5,4]
console.log(soma(...valores))

const obj=[...document.getElementsByTagName("div")]

obj.forEach(element => {
    element.innerHTML = "SAMP"
})