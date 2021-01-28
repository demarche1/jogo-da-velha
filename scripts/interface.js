document.addEventListener("DOMContentLoaded", () => {

    const squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })
})



function handleClick(event){
    let square = event.target
    let position = square.id
    handleMove(position)
    updateSquare(position)
    updatePlayer()
}

function updateSquare(position){
    let square = document.getElementById(position)
    let symbol = board[position]
    square.innerHTML = `<div class="${symbol}"></div>`
}

function updatePlayer(){
    document.querySelector(".playerTime").innerHTML = "Jogador da vez: " + playerTime
}
