var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var tiles
var start = document.getElementById(btn);

var updateRounds = function(){
    rounds++;
    $("showRounds").html(rounds);
}

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


let tiles = document.getElementsByTagName("div").sibling("p");
setTimeOut(function() {
    console.log(cards)
}, 2000);

$(".box").click(function(){
    $(".box").html("newGame");
});

console.log(cards, button, game, start);