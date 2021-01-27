
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

    if(game_over_status == false){
        if(playerTime == 0){
            playerTime = 1
        }
        else {
            playerTime = 0
        }
    }
    return game_over_status 
}

function gameOver(){
    for(let i = 0; i < winStates.length; i++){
        let arrayPosition = winStates[i]

        let pos1 = arrayPosition[0]
        let pos2 = arrayPosition[1]
        let pos3 = arrayPosition[2]

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            return true
        }
    }
    return false
}
