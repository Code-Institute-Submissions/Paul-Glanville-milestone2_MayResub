var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

var game = {
    count = 0;
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

var cards = document.getElementsByTagName("div").child("p");
setTimeOut(function() {
    console.log(cards)
}, 2000);

console.log(cards, button, game);