grid = document.querySelector('.grid')
const defaultSize = 20
let btnClear = document.querySelector('.btn').addEventListener('click',clearBtn)


function createGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
    grid.style.gridTemplateRows = `repeat(${gridSize},1fr)`
    grid.innerHTML = ""
    for (let index = 0; index < gridSize * gridSize; index++) {
        const div = document.createElement('div')
        div.classList.add('grid-item')
        div.addEventListener('mouseover',() => div.style.backgroundColor = 'black')
        grid.appendChild(div)
    }

}
function clearBtn() {
    const inputSize = parseInt(document.querySelector("#inputSize").value,10)
    const size = isNaN(inputSize) || inputSize <= 0 ? defaultSize : inputSize;
    createGrid(size)
}

createGrid(defaultSize);
