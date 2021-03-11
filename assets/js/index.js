let start = true;
let cardsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let memoryArray = [];
let memoryCounter = [];
let playerArray = [];
let playerCounter = [];
let levelCounter = [];
let level;
let playLevel;
let userCounter = [];
let startMemory;
let matchArrays = true;

$("#btn").on("click", function() {
    $("#btn").on("start").css("background-color", "red");
      cardsArray = [];
      start = true;
      playerArray = [];
      memoryArray = [];
      memoryCounter = 0;
      playerCounter = 0;
      levelCounter = 1;
      clearInterval("game");
      setTimeout(function() {startMemory =
          setInterval("game", 2000);}, 2000);
        return startMemory;
});

function tileActivate(_number) {
    tiles = document.querySelector("[data-tile ='${number}']");
}

let tiles = document.getElementsByClassName("p");
  setTimeout(function() {
    levelCounter++;
}, 2000);

let updateRound = function(){
    rounds++;
  $("#showRound").css("#showRounds");
};

let game = {
  count: 0,
  currentGame: [],
  player: [],
};

function playRound(nextSequence) {
    nextSequence.forEach((number, index) => {
      setTimeout(() => {
        tileActivate(number);
      }, (index + 1) * 550)
  });
  return nextSequwncw;
}

$("div").on("click", function(){
    if(start == "game" && "running");
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
            setInterval(start, 2000);}, 2000);
    }
})

function newRound() {
  level += 1;
  Container.addClass(unclickable);
  info.textContent = "wait for sequence to finish";
  heading.textContent = "level ${level} of 20";

  sequence = [rounds];
  nextSequence.push(nextStep());
  playlevel(nextSequence);
  setTimeout(() => {
      playerTurn(turn);
  }, level*600+1000);

  newRound.addEventListener(sequence);
  return sequence;
}

console.log(start, memoryArray, memoryCounter);
console.log(playerCounter, playerArray, playLevel, levelCounter, cardsArray);
console.log(game, level, tiles, updateRound, newRound);