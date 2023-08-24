rowLength = 16
columnLength = rowLength 
for (i = 0; i < columnLength; i++ ){
    const container = document.querySelector('#gridContainer')
    const row = document.createElement('div')
    row.setAttribute("id", 'row');
    container.appendChild(row);
    for (j = 0; j < rowLength; j++){  
        rowContainer = row
        const square = document.createElement('div');
        square.setAttribute("id", 'square');
        rowContainer.appendChild(square);
    }
}

let square = document.querySelectorAll("#square").forEach(elem => {
    elem.addEventListener("mouseover", item => {
        elem.setAttribute('style', 'background-color:black;')
    });
})


