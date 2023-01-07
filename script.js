const container = document.querySelector(".container");
const gridChange = document.querySelector(".change");
const resetButton = document.querySelector(".reset");

const colorPicker = document.querySelector('.current input');
const colorMode = document.querySelector('.current p');
const oneColorButton = document.querySelector('button.color');
const randomButton = document.querySelector('button.random');
const greyButton = document.querySelector('button.grey');
let rowNumber = 4;
let mode = 'color';
let currentColor = 'rgb(255,0,0)';

function createGrid(num){
    for (let i=0;i < num**2; i++){
        const div = document.createElement("div");
        div.classList.add("box")
        div.style.width = `${(100/num)}%`;
        div.style.height = `${(100/num)}%`;
        div.style.backgroundColor = "rgba(0,0,0,0)"
        container.appendChild(div);
    }
    const nodes = document.querySelectorAll(".box");
    nodes.forEach((node) => {
    node.addEventListener("mouseover", (e)=> {

        switch (mode) {
            case 'random':
                e.target.style["background-color"] = `rgb(${random()},${random()},${random()}`;
                break;
            case 'greyScale':
                let color = e.target.style["background-color"];
                lsCurrent = color.split('');
                currentAlpha = lsCurrent.slice(lsCurrent.lastIndexOf(',') + 2, lsCurrent.indexOf(')'))
                .join("");
                if (+currentAlpha + .1 == 1) return;
                e.target.style["background-color"] = `rgba(0,0,0,${+currentAlpha + .10})`
                break;
            default: 
                e.target.style["background-color"] = currentColor;   

        }
        
        
    });
});
}
createGrid(rowNumber);
function deleteGrid() {
    container.innerHTML = '';
}

function resetGrid() {
    deleteGrid();
    createGrid(rowNumber);
}


function random() {
    return Math.floor(Math.random() * 256)
}

colorPicker.addEventListener('change', (e)=>{
    currentColor = e.target.value;
},false)

greyButton.addEventListener('click', (e)=>{
    e.preventDefault(); 
    resetGrid();
    mode = 'greyScale';
    colorMode.textContent = 'Current mode: Grey Scale';
})

oneColorButton.addEventListener('click', (e)=> {
    e.preventDefault();
    colorMode.textContent = 'Current mode: Single Color';
    mode = 'color';
    // currentColor = 'rgb(255,0,255)';

});

randomButton.addEventListener('click', (e) => {
    e.preventDefault();
    mode = 'random';
    colorMode.textContent = 'Current mode: Random';
})
gridChange.addEventListener("click", () => {
    answer = prompt("How many boxes on each side?", '4');
    deleteGrid()
    rowNumber = (answer <= 100) ? answer : 100;
    createGrid(rowNumber);
});

resetButton.addEventListener("click", (e)=> {
    e.preventDefault();
    resetGrid();
})