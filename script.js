const container = document.querySelector(".container");

container.addEventListener("mouseover", (e) => {
    if (e.target.className === "cell") {
        e.target.style.backgroundColor = "black";
    }
});

function createSketchPadField() {
    let userInput;

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

    console.log(container.offsetWidth);
    
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