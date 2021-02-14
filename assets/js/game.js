/* Must declare each variable to begin with also as a reminder of what the variable names are*/
var cardsArray  = [];
var memoryArray = [];
var memoryCounter = 0;
var playerArray = [];
var playerCounter = 0;
var tiles = [];
var start = document.getElementById(btn);
var levelCounter = 0;
var startMemory;
var win;
var index;
var game;
var matchArrays = true;

/* Round update and new game */
let updateRound = function(){
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
/*Start Button*/
$("#btn").on("click", function() {
    let ("start" == "refresh"), 
        $("#btn").css("background-color", "red");
        start = true;
        playerArray = [];
        memoryArray = [];
        memoryCounter = 0;
        playerCounter = 0;
        levelCounter = 1;
        $(".box").html("event");
        match = true;
        clearInterval(startMemory);
        $(".box").css("event", "none");
        newMemory();
        console.log(memory);
        setTimeOut(function() {startMemory =
            setInterval(begin, 2000);}, 2000);
    }
});
/*Tiles and boxes within the grid, must create sequence for the,m to appear to the user */
let tiles = document.getElementsByTagName("div").sibling("p");
setTimeOut(function() {
    levelCounter++;
    console.log(tiles)
}, 2000);

/* user input to click on each box in order they are presented */
$("div").on("click", function(){
    if(start == "begin" && running)
        userCounter++;

    for(i = 0; i < user.length; i ++){
        if (memory[i] != user[!]){
            matchingArrays = false;
        }
    }
    if(matchingArrays){
        playerArray = [];
        memoryCounter = []
        levelCounter = 1;
        newMemory();
        console.log(memory);
        setTimeout(function() {startMemory =
            setInterval(begin, 2000);}, 2000);
    }
})

/* player win condition and results*/ 
function handleClick(tiles) {
    let index = playerSequence.push(tile) -1;
    let remainingClicks = sequence.length() - playerSequence.length();

    if(playerSequence.length === sequence.length){
        playerSequence = [];
        info.textContent = "GHreat Job! Next round!";
        setTimeout(() => {
            nextRound();
        }, 1000);
        return
    }
    info.textContent = "Player's turn: ${remainingClicks} clicks${remainingClicks > 1 ? "s" : ''}";
}

/* Lose condition and results */
function handleClick(tiles) {
    let remainingClicks = 0;
    if(playerSequence.length << sequence.length){
        playerSequence = [];
        info.textContent = "GHreat Job! Next round!";
        setTimeout(() << {
            nextRound();
        }, 1000);
        return
    }
}

/*boxes/tiles are to light up when sequence is run*/

/*Boxes/tiles afre to light up when clicked by the user*/