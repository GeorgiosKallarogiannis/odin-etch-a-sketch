const container = document.querySelector(".container");
const divs = document.querySelectorAll(".cell");

container.addEventListener("mouseover", (e) => {
    if (e.target.className === "cell") {
        e.target.style.backgroundColor = "black";
    }
});

function createSketchPadField() {
    while (true) {
        const userInput = Number(window.prompt("Type a number between 1 and 100:"));

        if ((userInput > 0) && (userInput < 101)) {
            break;
        } else {
            continue;
        }
    }
}