// Initial references
const container = document.querySelector(".container");
const playerTurn = document.getElementById("playerTurn");
const startScreen = document.querySelector(".startScreen");
const startButton = document.getElementById("start");
const message = document .getElementById("message");
let initialMatrix = [
    [0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, ],
];
let currentPlayer;

//Random Number Between Range
const generateRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;

//Create Matrix
const matrixCreator = () => {
    for (let innerArray in initialMatrix) {
        let outerDiv = document.createElement("div");
        outerDiv.classList.add("grid-row");
        outerDiv.setAttribute("data-value", innerArray);
        for (let j in initialMatrix[innerArray]) {
            //Set all matrix values to 0
            initialMatrix[innerArray][j] = [0];
            let innerDiv = document.createElement("div");
            innerDiv.classList.add("grid-box");
            innerDiv.setAttribute("data-value", j);
            innerDiv.addEventListener("click", (e) => {
                fillBox(e);
            });
            outerDiv.appendChild(innerDiv);
        }
        container.appendChild(outerDiv);
    }
};

// Initialise game
window.onload = startGame = async () => {
    //Between 1 and 2
    currentPlayer = generateRandomNumber(1, 3);
    container.innerHTML = "";
    await matrixCreator();
    playerTurn.innerHTML = `player <span>${currentPlayer}'s</span> turn`;
};


