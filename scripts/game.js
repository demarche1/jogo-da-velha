
let board = ['','','','','','','','','']
let playerTime = 0
let player0 = null
let player1 = null
let simbols = ['o','x']
let game_over_status = false
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function handleMove(position){


    if(board[position] == ''){
        board[position] = simbols[playerTime]
    }

    game_over_status = gameOver()
    game_over_status = boardFilled()
    console.log(playerTime);
    if(game_over_status == false){
        if(playerTime == 0){
            playerTime = 1
        }
        else {
            playerTime = 0
        }
    }

}

function gameOver(){
    for(let i = 0; i < winStates.length; i++){
        let arrayPosition = winStates[i]

        let pos1 = arrayPosition[0]
        let pos2 = arrayPosition[1]
        let pos3 = arrayPosition[2]

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            setTimeout(() => {
                alert("O vencedor foi jogador " + (playerTime - 1) + ". Parabéns")
                location.reload()
            }, 10);
            return true
        }
    }
    return false
}

function boardFilled(){
    let filledPositions = null
    for(let i = 0; i < board.length; i++){
        if(board[i] != ''){
            filledPositions ++
        }
    }
    if(filledPositions == 9){
        if(game_over_status != true)
            setTimeout(() => {
                alert("Empatou")
                location.reload()
            }, 10);
    }
    return false
}
