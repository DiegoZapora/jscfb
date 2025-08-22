const configGrid = {
    endPoint: "musicas.json",
    idDestino: "dataGridDados"
}

const dataGrid = (configGrid) => {
    const dataGD = document.getElementById(configGrid.idDestino)
    dataGD.innerHTML = ""
    fetch(configGrid.endPoint)
    .then(res => res.json())
    .then(res => {
        res.forEach((e, index) => {

            let dataGridLinha = document.createElement("div")
            dataGridLinha.setAttribute("class", "dataGridLinha")

            let c1 = document.createElement("div")
            c1.setAttribute("class", "c1")
            c1.innerHTML = e.id
            dataGridLinha.appendChild(c1)

            let c2 = document.createElement("div")
            c2.setAttribute("class", "c2")
            c2.innerHTML = e.musica
            dataGridLinha.appendChild(c2)

            let c3 = document.createElement("div")
            c3.setAttribute("class", "c3")
            c3.innerHTML = e.album
            dataGridLinha.appendChild(c3)

            let c4 = document.createElement("div")
            c4.setAttribute("class", "c4")
            c4.innerHTML = e.cantor
            dataGridLinha.appendChild(c4)

            let c5 = document.createElement("div")
            c5.setAttribute("class", "c5")
            dataGridLinha.appendChild(c5)

            let deleteIcon = document.createElement("div")
            deleteIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>'
            c5.appendChild(deleteIcon)

            deleteIcon.addEventListener("click", (evt) => {
                dataGridLinha.remove(evt.target)
                res.splice(index, 1)
            })

            let viewIcon = document.createElement("div")
            viewIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>'
            c5.appendChild(viewIcon)

            let editIcon = document.createElement("div")
            editIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000ff"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>'
            c5.appendChild(editIcon)


            dataGD.appendChild(dataGridLinha)
        })
    })
}

dataGrid(configGrid);

/*<div class="dataGridLinha">
    <div class="c1">01</div>
    <div class="c2">Mentalize</div>
    <div class="c3">Mentalize</div>
    <div class="c4">Andre Matos</div>
    <div class="c5">D E V</div>
</div>*/