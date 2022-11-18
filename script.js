const Gameboard = (function(){
    let gameBoard=[];
    return {};
})();

let createPlayer = (playerName, playerNumber, assignedXO) =>{
    let getPlayerName = () =>{
        console.log("This is name of player"+ playerNumber+ "......."+ playerName);
    }
    return(getPlayerName, playerName, playerName, assignedXO);
}

let Justin= createPlayer("Justin", 1, "X");
let James= createPlayer("James", 2, "O");