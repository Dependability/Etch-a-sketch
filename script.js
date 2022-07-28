const container = document.querySelector(".container");
const gridChange = document.querySelector(".change");

function createGrid(num){
    for (let i=0;i < num**2; i++){
        const div = document.createElement("div");
        div.classList.add("box")
        div.style.width = `${(1/num)* 100}%`;
        div.style.height = `${(1/num)* 100}%`;
        div.style.backgroundColor = "rgba(0,0,0,0)"
        container.appendChild(div);
    }
    const nodes = document.querySelectorAll(".box");
    nodes.forEach((node) => {
    node.addEventListener("mouseover", (e)=> {
        //e.target.style["background-color"] = `rgb(${random()},${random()},${random()})`;
        currentColor = e.target.style["background-color"];
        console.log(currentColor)
        lsCurrent = currentColor.split('');
        currentAlpha = lsCurrent.slice(lsCurrent.lastIndexOf(',') + 2, lsCurrent.indexOf(')'))
        .join("");
        if (+currentAlpha + .1 == 1) return;
        e.target.style["background-color"] = `rgba(0,0,0,${+currentAlpha + .10})`
        
        
    });
});
}
createGrid(4);
function deleteGrid() {
    container.innerHTML = '';
}


function random() {
    return Math.floor(Math.random() * 256)
}


gridChange.addEventListener("click", () => {
    answer = prompt("How many boxes on each side?", '4');
    deleteGrid()
    answer = (answer <= 100) ? answer : 100;
    createGrid(answer);
});
