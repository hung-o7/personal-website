var moves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var robotmoves = 0;
var xWins = 0;
var oWins = 0;
var b = ["a", "b", "a", "b", "a", "b", "a", "b", "a"];
var boxes = document.getElementsByClassName("spaces");
var playerMoved = 0;

function randomplay(numtaken){
    var randy = Math.round(Math.random() * 9);
    while(robotmoves < 4){
        if(randy != moves[randy]){
            randy = Math.round(Math.random() * 9);
        }
        else{
            robotmoves += 1;
            return randy;
            break;
        }
    }
}
function randomMove(rand){

    b[rand] = "O"
    boxes[rand].textContent = "O";  
    moves[rand] = -1;
    boxes[rand].disabled = true;
}
function checkWinner(){
    outputX = document.getElementById("x");
    outputO = document.getElementById("o");

    if(b[0] == b[1] && b[1] == b[2]){
        if(b[0] == "O"){
            oWins += 1;
            resetGame();
        }
        if(b[0] == "X"){
            xWins += 1;
            resetGame();
        }
    }
    else if(b[3] == b[4]&& b[4] == b[5]){
        if(b[3] == "O"){
            oWins += 1;
            resetGame();
        }
        if(b[3] == "X"){

            xWins += 1;
            resetGame();
        }
    }
    else if(b[6] == b[7] && b[7] == b[8]){
        if(b[7] == "O"){
            oWins += 1;
            resetGame();
        }
        if(b[7] == "X"){
            xWins += 1;
            resetGame();
        }
    }
    else if(b[0] == b[3] && b[3] == b[6]){
        if(b[0] == "O"){
            oWins += 1;
            resetGame();
        }
        if(b[0] == "X"){
            xWins += 1;
            resetGame();
        }
    }
    else if(b[1] == b[4] && b[4] == b[7]){
        if(b[1] == "O"){
            oWins += 1;
            resetGame();
        }
        if(b[1] == "X"){
            xWins += 1;
            resetGame();
        }
    }
    else if(b[2] == b[5] && b[5] == b[8]){
        if(b[2] == "O"){
            oWins += 1;
            resetGame();
        }
        if(b[2] == "X"){
            xWins += 1;
            resetGame();
        }
    }
    else if(b[0] == b[4]&& b[4] == b[8]){
        if(b[0] == "O"){
            oWins += 1;
            resetGame();
        }
        if(b[0] == "X"){
            xWins += 1;
            resetGame();
        }
    }
    else if(b[2] == b[4] && b[4] == b[6]){
        if(b[2] == "O"){
            oWins += 1;
            resetGame();
        }
        if(b[2] == "X"){
            xWins += 1;
            resetGame();
        }
    }

    outputX.textContent = xWins;
    outputO.textContent = oWins;
}
function resetGame(){
    for(var i = 0; i < 9; i++){
        b[i] = "L";
        boxes[i].textContent = " ";
        boxes[i].disabled = false;
        moves[i] = i;
    }
    robotmoves = 0;
    playerMoved = 0;
}
function playermove(boxNum){
    b[boxNum] = "X";
    boxes[boxNum].textContent = "X";
    moves[boxNum] = -1;
    playerMoved += 1;
    boxes[boxNum].disabled = true;

    if(playerMoved == 5){
        checkWinner();
        resetGame();
    }
    else{
        randomMove(randomplay(moves));
        checkWinner();
    }
}