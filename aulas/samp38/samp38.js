//const valores = [4241,42,424,242,4,653,456,57,565,4]
//const it_v = valores[Symbol.iterator]()

const password = '12345678'
const ITpassword = password[Symbol.iterator]()

for(let sizePassword = password.length ; sizePassword > 0 ; sizePassword--) {
    const current = ITpassword.next().value

    if(isNaN(Number(current)) || current == ' ') {
        console.log('Não é possivel criar uma senha com letras. Por favor crie apenas com NÚMEROS.')
        break;
    }

    if (password.length < 8) {
        console.log("lixo")
        break
    }

    if(sizePassword === 1) {
        console.log('Sucesso!')
    }
}