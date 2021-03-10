let start = true;
let cardsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let memoryArray = [];
let memoryCounter = [];
let playerArray = [];
let playerCounter = [];
let levelCounter = [];
let level;
let startMemory;
let matchingArrays = true;

/* Start Button */
$("#btn").on("click", function() {
    start = "begin";
    $("#btn").on("begin").css("background-color", "red");
      playerArray = [];
      memoryArray = [];
      memoryCounter = 0;
      playerCounter = 0;
      levelCounter = 1;
    $(".box").html("event");
      clearInterval("begin");
      setTimeout(function() {startMemory =
          setInterval("begin", 2000);}, 2000);
        return clearInterval;
});

function tileActivate(_number) {
    tiles = document.querySelector("[data-tile ='${number}']");
}

function nextLevel() {
    random = tiles[Math.floor(math.random) * tiles.length];
    return random;
}

let tiles = document.getElementsByTagName("p");
setTimeout(function() {
    levelCounter++;
}, 2000);

let updateRound = function(){
    rounds++;
    $("#showRound").html(rounds);
};

let game = {
    count: 0,
    currentGame: [],
    player: [],
}
function playRound(nextSequence) {
    nextSequence.forEach((number, index) => {
        setTimeout(() => {
            tileActivate(number);
        }, (index + 1) * 550)
    });
    return playRound;
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
    return sequence;
}
console.log(start, memoryArray, memoryCounter);
console.log(playerCounter, playerArray, levelCounter, cardsArray);
console.log(game, tiles, updateRound, newRound);