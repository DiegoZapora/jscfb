let nome = "Andre Coelho Matos 1971"
let email = "Andre.com.br"
let numeros = "1, 10, 100, 1000"

/*console.log(nome.match(/[a-m | 0-9]/ig))

console.log(nome.match(/\d/ig))
console.log(nome.match(/\s/ig))
console.log(nome.match(/\bA/ig))*/

console.log(nome.match(/o+/ig))
console.log(nome.match(/os*/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))