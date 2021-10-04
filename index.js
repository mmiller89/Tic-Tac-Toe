var playerValueJS = 1
var playerValue = `Player`
var amountFilled = 0
var gameArray = [0,1,2,3,4,5,6,7,8]
var positionalArray = []
var validArrays = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
   
] 

$(document).ready(function() {
    $('td').on("click", function() {
       
        let currentID = $(this).attr('id')
          $('#' + currentID).text(function () {
              var tdContent = $("#" + currentID).text();
              if (playerValueJS === 1 && tdContent !== "O" && tdContent !== "X"){
                gameArray[currentID] = "O"
                playerValueJS ++
                drawText(currentID, "O", checkWinner)
              } else if (playerValueJS === 2 && tdContent !== "O" && tdContent !== "X") {
                  gameArray[currentID] = "X"
                  playerValueJS --
                  drawText(currentID, "X", checkWinner)
              }
        })  
    })
    
    
});

function drawText(currentID, text, checkWinner) {
    amountFilled ++
    player.innerHTML = `${playerValue} ${playerValueJS}`
    $('#' + currentID).text(text)
    setInterval(function() {
        checkWinner()
    }, 500)
    
}



function checkWinner() {
    positionalArray = []
    for (i=0; i <= gameArray.length; i++){
        if (gameArray[i] === "O"){
            positionalArray.push(i)
        }
    }
    validateArrays(positionalArray, "1")
    positionalArray = []
    for (i=0; i <= gameArray.length; i++){
        if (gameArray[i] === "X"){
            positionalArray.push(i)
            }
    
        }
    validateArrays(positionalArray, "2")
    if (amountFilled === 9){
        alert("Stalemate!");
        resetGame();
    }
    }

   


    
function validateArrays(positionalArray, pNum) {
        for (i=0; i <= validArrays.length - 1; i++){
            let check = (array, targetArray) => targetArray.every(a => array.includes(a));
            if (check(positionalArray, validArrays[i])){
                alert(`Player ${pNum} wins!`)
                resetGame()
            }
        }
    }



function resetGame(){
    gameArray = [0,1,2,3,4,5,6,7,8]
    playerValueJS = 1
    player.innerHTML = `${playerValue} ${playerValueJS}`
    positionalArray = []
    amountFilled = 0
    tdContent = ""
    $('td').html("&nbsp;")
   

}


