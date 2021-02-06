var cardsArray  = [];
var MemoryCounter = 0;
var user = [];
var tiles
var start = document.getElementById(btn);

var updateRound = function(){
    rounds++;
    $("showRound").html(rounds);
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
$("#btn").on("click", function() {
    let ("start" == "refresh") {
        $("#btn").css("background-color", "red");
        start = true;
        user = [];
        memory = [];
        memoryCounter = 0;
        userCounter = 0;
        levelCounter = 1;
        $(".box").html("event");
        match = true;
        clearInterval(startGame);
        $(".box").css("event", "none");
        newMemory();
        console.log(memory);
        setTimeOut(function() {startGame =
            setInterval(begin, 2000);}, 2000);
    }
});

let tiles = document.getElementsByTagName("div").sibling("p");
setTimeOut(function() {
    console.log(cards)
}, 2000);