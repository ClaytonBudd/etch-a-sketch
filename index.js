const buildButton = document.getElementById('buildGrid')
buildButton.addEventListener("click", sizePrompt);

const clearButton = document.getElementById('clearGrid')
clearButton.addEventListener('click', buildGrid);

window.addEventListener("mousedown", () => {
    isDraw = true;
    });
window.addEventListener("mouseup", () => {
    isDraw = false;
});   


function buildGrid(){
    clearGrid()
    for (i = 0; i < columnLength; i++ ){
        const container = document.querySelector('#gridContainer');
        const row = document.createElement('div');
        row.setAttribute("id", 'row');
        container.appendChild(row);
        for (j = 0; j < rowLength; j++){  
            rowContainer = row
            const square = document.createElement('div');
            square.setAttribute("id", 'square');
            rowContainer.appendChild(square);
        }
    }draw()   
};


function clearGrid(){
    let parent = document.getElementById("gridContainer")
    while (parent.hasChildNodes())
        parent.removeChild(parent.firstChild)
};

function draw(){
    document.querySelectorAll("#square").forEach(elem => {
        elem.addEventListener("mouseover", item => 
        {
        if(isDraw){elem.setAttribute('style', 'background-color:black;')}
        }
    )}
)};
                
function sizePrompt(){
    rowLength = prompt('Enter a side length (max 100)')
    columnLength = rowLength
    buildGrid()    
};


