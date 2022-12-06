/*const Gameboard = (function(){
    let gameBoard=["","","","","","","","",""];
    return {};
})();

let createPlayer = (playerName, playerNumber, assignedXO) =>{
    let getPlayerName = () =>{
        console.log("This is name of player"+ playerNumber+ "......."+ playerName);
    }
    return(getPlayerName, playerName, playerName, assignedXO);
}

let Justin= createPlayer("Justin", 1, "X");
let James= createPlayer("James", 2, "O");*/
/*
const board= document.getElementById("board");
function createBoard(){
    
    for(let i=0; i<3; i++){
        let row= document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);
        for(let k=0; k<3; k++){
            let column= document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
    
}
createBoard();



let boxes= document.getElementsByClassName("column");
function writeSign(){
    //let boxes= document.getElementsByClassName("box");
    for(let i=0; i<boxes.length; i++){
        boxes[i].addEventListener("click", insertSign);
    }
}
let sign="";
let counter=1;
function insertSign(){
    if(this.textContent===""){
        if(counter%2==0){
            this.textContent="O";
            sign="O";
            console.log(sign);
            if(checkWin(sign)){
                //console.log("Pobedio O")
                showWinner();
            }

        }
        else{
            this.textContent="X";
            sign="X";
            console.log(sign);
            if(checkWin(sign)){
                //console.log("Pobedio X")
                showWinner();
            }

        }

        counter++;
        playerSelector();
    }
}

let winningCombinations=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWin(sign){
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return boxes[index].textContent== sign
        })
    })
}

writeSign();
const resetB= document.getElementById("resetButt");
resetB.addEventListener("click",resetBoard );

function resetBoard(){
    board.innerHTML="";
    createBoard();
    writeSign();
    counter=1;
    console.log("board is reseted");
}

const whoPlay= document.getElementById("playTurn");
function playerSelector(){
    if(counter%2==0){
        whoPlay.textContent="Player O" ;
    }else{
        whoPlay.textContent="Player X" ;
    }
}
playerSelector();*/

// winning page

function showWinner(){
    document.body.innerHTML="";
    let containerB= document.createElement("div");
    containerB.classList.add("containerB");
    document.body.appendChild(containerB);
    let winnerName= document.createElement("div");
    winnerName.classList.add("winnerName");
    containerB.appendChild(winnerName);
    let commandCont= document.createElement("div");
    commandCont.classList.add("commandCont");
    containerB.appendChild(commandCont);
    let resetB= document.createElement("button");
    resetB.classList.add("resetB");
    commandCont.appendChild(resetB);
    resetB.textContent="Reset Game";
    let newGameB= document.createElement("button");
    newGameB.classList.add("newGameB");
    commandCont.appendChild(newGameB);
    newGameB.textContent="New Game";
    
    if(counter%2==0){
        winnerName.textContent=playerO+" is winner";
    }else{
        winnerName.textContent=playerX+" is winner";
    }
    
    resetB.addEventListener("click", gameScreen)
    resetB.addEventListener("click", console.log(counter))

    newGameB.addEventListener("click", startingScreen)
    
}
let counter=1;
//game page

function gameScreen(){
    counter=1;
    console.log(counter);
    document.body.innerHTML="";
    let gameName=document.createElement("h1");
    gameName.textContent="TIC TAC TOE";
    document.body.appendChild(gameName);

    let container= document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    let playSchedule= document.createElement("div");
    playSchedule.classList.add("playSchedule");
    container.appendChild(playSchedule);

    let turn= document.createElement("p");
    turn.textContent="Turn:";
    playSchedule.appendChild(turn);

    let playTurn= document.createElement("div");
    playTurn.classList.add("playTurn");
    playSchedule.appendChild(playTurn);

    let board= document.createElement("div");
    board.classList.add("board");
    container.appendChild(board);

    let managingDiv= document.createElement("div");
    managingDiv.classList.add("managingDiv");
    container.appendChild(managingDiv);

    let newGameB= document.createElement("button");
    newGameB.classList.add("newGameB");
    newGameB.textContent="New Game";
    managingDiv.appendChild(newGameB);

    let resetB= document.createElement("button");
    resetB.classList.add("resetB");
    resetB.textContent="Reset";
    managingDiv.appendChild(resetB);



    function createBoard(){
    
        for(let i=0; i<3; i++){
            let row= document.createElement("div");
            row.classList.add("row");
            board.appendChild(row);
            for(let k=0; k<3; k++){
                let column= document.createElement("div");
                column.classList.add("column");
                row.appendChild(column);
            }
        }
        
    }
    createBoard();

    newGameB.addEventListener("click", startingScreen);

    let boxes= document.getElementsByClassName("column");
function writeSign(){
    //let boxes= document.getElementsByClassName("box");
    for(let i=0; i<boxes.length; i++){
        boxes[i].addEventListener("click", insertSign);
    }
}
let sign="";
//let counter=1;
function insertSign(){
    if(this.textContent===""){
        if(counter%2==0){
            this.textContent="O";
            sign="O";
            console.log(sign);
            if(checkWin(sign)){
                //console.log("Pobedio O")
                showWinner();
            }

        }
        else{
            this.textContent="X";
            sign="X";
            console.log(sign);
            if(checkWin(sign)){
                //console.log("Pobedio X")
                showWinner();
            }

        }
        console.log("usao u insert sign");
        counter++;
        console.log("dodao + counter");
        playerSelector();
    }
}

let winningCombinations=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWin(sign){
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return boxes[index].textContent== sign
        })
    })
}

writeSign();
//const resetB= document.getElementById("resetButt");
resetB.addEventListener("click",resetBoard );

function resetBoard(){
    board.innerHTML="";
    createBoard();
    writeSign();
    counter=1;
    console.log("board is reseted");
}

//const whoPlay= document.getElementById("playTurn");
function playerSelector(){
    if(counter%2==0){
        playTurn.textContent=playerO ;
    }else{
        playTurn.textContent=playerX ;
    }
}
playerSelector();

}
//napravio sam sve div za game screen

let playerX="";
let playerO="";


function startingScreen(){
    document.body.innerHTML="";

    let gameName=document.createElement("h1");
    gameName.textContent="TIC TAC TOE";
    document.body.appendChild(gameName);

    let startingContainer=document.createElement("div");
    startingContainer.classList.add("startingContainer");
    document.body.appendChild(startingContainer);

    let nameContainer=document.createElement("div");
    nameContainer.classList.add("nameContainer");
    startingContainer.appendChild(nameContainer);

    let xPart=document.createElement("div");
    xPart.classList.add("xPart");
    nameContainer.appendChild(xPart);

    let plX=document.createElement("p");
    plX.classList.add("plX");
    plX.textContent="Player X";
    xPart.appendChild(plX);

    let xName=document.createElement("input");
    xName.classList.add("xName");
    xPart.appendChild(xName);

    let oPart=document.createElement("div");
    oPart.classList.add("oPart");
    nameContainer.appendChild(oPart);

    let plO=document.createElement("p");
    plO.classList.add("plO");
    plO.textContent="Player O";
    oPart.appendChild(plO);

    let oName=document.createElement("input");
    oName.classList.add("oName");
    oPart.appendChild(oName);

    let startBut= document.createElement("button");
    startBut.classList.add("startBut");
    startBut.textContent="Start Game";
    startingContainer.appendChild(startBut);

    function submitNames(){
        playerX=xName.value;
        playerO=oName.value;
    }
    console.log(xName.value)
    startBut.addEventListener("click", submitNames);
    
    startBut.addEventListener("click", gameScreen);

}
startingScreen();