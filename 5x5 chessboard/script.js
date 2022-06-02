let board = document.querySelector("#board")

for (let i=1; i < 25; i++){
    let newSquare = document.getElementById("square1").cloneNode(true);
    newSquare.setAttribute("id", `square${i+1}`)
    board.appendChild(newSquare);
}