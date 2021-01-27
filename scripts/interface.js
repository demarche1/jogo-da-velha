document.addEventListener("DOMContentLoaded", () => {

    const squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })

    document.querySelector(".play").addEventListener("click", showStage)
})



function handleClick(event){
    let square = event.target
    let position = square.id
    if(handleMove(position) == true){
        setTimeout(() => {
            alert("O vencedor foi jogador " + playerTime + ". Parabéns")
        }, 10);
        setTimeout(() => {
            location.reload()
        }, 500);
    }
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
