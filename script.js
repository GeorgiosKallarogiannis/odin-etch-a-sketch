const container = document.querySelector(".container");
let lightnessCounter = 100;

container.addEventListener("mouseover", (e) => {
    if (e.target.className === "cell") {
        const hue = Math.floor(Math.random() * 360);
        lightnessCounter -= 10;

        e.target.style.backgroundColor = `hsl(${hue} 100% ${lightnessCounter}%)`;
    }
});

function createSketchPadField() {
    let userInput;
    lightnessCounter = 100;
    while (true) {
        userInput = Number(window.prompt("Type a number between 1 and 100:"));

        if (userInput > 0 && userInput < 101) {
            break;
        } else {
            continue;
        }
    }

    removeAllChildren(container);

    const childDiv = document.createElement("div");
    childDiv.className = "cell";

    sizePadElements(container, childDiv, userInput);

    for (let i = userInput ** 2; i > 0; i--) {
        container.appendChild(childDiv.cloneNode());
    }
}

function removeAllChildren(parent) {
    const parentElement = parent;

    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

function sizePadElements(container, element, rows) {
    const containerWidth = container.offsetWidth;
    const containerPadding =
        parseInt(window.getComputedStyle(container).padding, 10) * 4;
    const elementDimension = (containerWidth - containerPadding) / rows;

    element.style.width = `${elementDimension}px`;
    element.style.height = `${elementDimension}px`;
}
