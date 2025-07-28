const data = new Date (

)

let sas = data.getMonth()
sas+1
if (sas < 10) {
    sas = "0"+(sas+1)
} else {
    sas+1
}

let samp = data.getDate()
if (samp < 10) {
    samp = "0"+samp
} else {
    samp
}

console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`)

console.log(`${samp}/${sas}/${data.getFullYear()}`)