let colocacao = 5

switch (colocacao) {
    case 1:
        console.log("Vencedor")
        break
    case 2:
        console.log("Segundo Lugar")
        break
    case 3: 
        console.log("Terceiro Lugar")
        break
    case 4: case 5: case 6:
        console.log("Premio de SAMP")
        break
    default: 
        console.log("Não subiu no podio")
        break
}