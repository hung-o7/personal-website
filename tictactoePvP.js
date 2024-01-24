var xWins = 0;
var oWins = 0;
var b = ["a", "b", "a", "b", "a", "b", "a", "b", "a"];
var boxes = document.getElementsByClassName("spaces");
var totalMoves = 0;

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
    }
    totalMoves = 0;
}
function playermove(boxNum){
    boxes[boxNum].disabled = true;

    if(totalMoves == 8){
        b[boxNum] = "X";
        boxes[boxNum].textContent = "X";
        checkWinner();
        resetGame();
    }
    else if((totalMoves % 2) == 1){
        b[boxNum] = "O";
        boxes[boxNum].textContent = "O";
        totalMoves += 1;
        checkWinner();
    }
    else if((totalMoves % 2) == 0){
        b[boxNum] = "X";
        boxes[boxNum].textContent = "X";
        totalMoves += 1;
        checkWinner(); 
    }
}