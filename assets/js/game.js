/* Must declare each variable to begin with also as a reminder of what the variable names are*/
let cardsArray  = [];
let memoryArray = [];
let memoryCounter = 0;
let playerArray = [];
let playerCounter = 0;
let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let start = false /* (document.getElementById("#btn")) */;
let levelCounter = 0;
let level = 0;
let startMemory;
let playerTurn;
let newMemory;
let rounds = [];
let win;
let index;
let game;
let matchArrays = true;

/* start of and new game */
let game = {
    count: 0,
    currentGame: [],
    player: [],
}
function newGame() {
    clearGame();
}
function clearGame() {
    game.currentGame = [];
    game.count = 0;
}
function nextRound() {
    level += 1;
    nextSequence = [rounds];
}
function nextLevel() {
    tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    random = tiles[Math.floor(math.random) * tiles.length];

    return random;
}

/*Start Button*/
$("#btn").on("click", function() {
    start = game;
    $("#btn").css("background-color", 'red');
    start = true;
    playerArray = [];
    memoryArray = [];
    memoryCounter = 0;
    playerCounter = 0;
    levelCounter = 1;
    $(".box").html("event");
    match = true;
    clearInterval(startMemory);
    $(".box").css("event", 'none');
    newMemory();
    console.log(memory);
    setTimeOut(function() {startMemory =
        setInterval(begin, 2000);}, 2000);
});
$("#btn").addEventListener("click");
/*Tiles and boxes within the grid, must create sequence for the,m to appear to the user */
let tiles = document.getElementsByTagName("div").sibling("p");
setTimeOut(function() {
    levelCounter++;
    console.log(tiles)
}, 2000);

function tileActivate(number); {
    tiles = document.querySelector("[data-tile ='${number}']");
}

function playRound(nextSequence) {
    nextSequence.forEach((number, index) => {
        setTimeout(() => {
            tileActivate(number);
        }, (index + 1) * 550)
    });
}

/* Round update */
let updateRound = function(){
    rounds++;
    $("#showRound").html(rounds);
}

function newRound() {
    level += 1;
    Container.addClass(unclickable);
    info.textContent = "wait for sequence to finish";
    heading.textContent = "level ${level} of 20";

    sequence = [rounds];
    nextSequence.push(nextStep());
    playlevel(nextSequence);
    
    sequence = [rounds];
    setTimeout(() => {
        playerTurn(turn);
    }, level*600+1000);

    newRound.addEventListener(sequence);
    return newRound;
}    

/* user input to click on each box in order they are presented */
$("div").on("click", function(){
    if(start == "begin" && "running");
        userCounter++;

    for(i = 0; i < user.length; i ++){
        if (memory[i] != user[i]) {
            matchingArrays = false;
        }
    }
    if(matchArrays){
        playerArray = [];
        memoryCounter = [];
        levelCounter = 1;
        newMemory();
        console.log(memory);
        setTimeout(function() {startMemory =
            setInterval(begin, 2000);}, 2000);
    }
})

/* player win condition and results*/ 
function handleClick(tiles); {
    index = playerSequence.push(tile) -1;
    remainingClicks = sequence.length() - playerSequence.length();

    if(playerSequence.length === sequence.length) {
        if(playerSequnece.length === 20) {
            resetGame("Great job! All levels completed.");
            return
        }
    }

    if(playerSequence.length === sequence.length){
        playerSequence = [];
        info.textContent = "Great Job! Next round!";
        setTimeout(() => {
            nextRound();
        }, 1000);
        return
    }
    info.textContent = "Player's turn: ${remainingClicks} clicks${remainingClicks > 1 ? 's' ; ''}";
}

/* Lose condition and results */
function handleClick(tiles); {
    remainingClicks = 0;
    if(playerSequence.length < sequence.length){
        playerSequence = [];
        info.textContent = "Oh Dear. Try again!";
        setTimeout((_medium) => {
            clearGame()
            game.currentGame = [];
            game.count = 0;
        }, 1000);
        return
    }
}

/*boxes/tiles are to light up and maybe make sound when sequence is run*/
let card = getElementByClass("box").addEventListener("click", function()
{
    return;
});

/*Boxes/tiles are to light up and maybe make sound when clicked by the user*/
/*  $("div").on("click", function(){}  */
