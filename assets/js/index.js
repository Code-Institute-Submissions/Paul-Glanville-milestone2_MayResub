let start = true;
let cardsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let memoryArray = [];
let memoryCounter = [];
let playerArray = [];
let playerCounter = [];
let levelCounter = [];
let level;
let memory = [];
let user;
let playLevel;
let userCounter = [];
let startMemory;
let matchArrays = true;

$("#btn").on("click", function(start) {
    $("#btn").on("start").css("background-color", "beige").toggle("hide");
      start = "game";
      cardsArray = [];
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

let tiles = document.getElementsByClassName("box");
  setTimeout(function() {
    levelCounter++;
}, 2000);

let updateRound = function(){
    rounds++;
  $("#showRound").css("showRounds");
};

let game = {
  count: 1,
  currentGame: [],
  player: [],
}

function playRound(nextSequence) {
  $(".box").on("start").css("background-color", "beige").toggle("flash");
    nextSequence.forEach((number, index) => {
      setTimeout(() => {
        tileActivate(number);
      }, (index + 1) * 550)
  });
  return nextSequwncw;
}

$(".box").on("click", function(){
    if(game == "start" && "rounds");
        userCounter++;

    for(i = 0; i < userCounter.length; i ++){
        if (memory[i] != user[i]) {
            matchingArrays = false;
        }
    }
    if(matchArrays){
        playerArray = [];
        memoryCounter = [];
        levelCounter = 1;
        newMemory = [];
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

console.log(start, memory, memoryArray, memoryCounter);
console.log(playerCounter, playerArray, playLevel, levelCounter, cardsArray);
console.log(game, level, tiles, updateRound, newRound);