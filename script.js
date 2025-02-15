const container = document.querySelector(".container");
let lightnessCounter = 100;

container.addEventListener("mouseover", (e) => {
    if (e.target.className === "cell") {
        const hue = Math.floor(Math.random() * 360);
        lightnessCounter -= 10;
        console.log(lightnessCounter);
        
        e.target.style.backgroundColor = `hsl(${hue} 100% ${lightnessCounter}%)`;
    }
});

function createSketchPadField() {
    let userInput;
    lightnessCounter = 100;
    while (true) {
        userInput = Number(window.prompt("Type a number between 1 and 100:"));

        if ((userInput > 0) && (userInput < 101)) {
            break;
        } else {
            continue;
        }
    }

    removeAllChildren(container); 

    const childDiv = document.createElement("div");
    childDiv.className = "cell";

    for (let i = userInput ** 2; i > 0; i--) {
        container.appendChild(childDiv.cloneNode());
    }

    sizePadField(container, userInput);
}

function removeAllChildren(parent) {
    const parentElement = parent;

    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

function sizePadField(container, rows) {
    const childWidth = container.firstChild.offsetWidth;
    const newContainerWidth = childWidth * rows;
    
    container.style.width = `${newContainerWidth}px`; 
}