var game = {
    count = 0;
    possibilities = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
    currentGame = [],
    player = [],
}
function newGame() {
    clearGame();
}
function clearGame() {
    game.currentGame = [];
    game.count = 0;
}

function setTimeOut() {
    setTimeOut(hide, 2000);
    console.log(hide)
}
