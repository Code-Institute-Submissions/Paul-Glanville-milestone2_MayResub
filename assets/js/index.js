/* Variables */
let start = false;
let cardsArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
let memoryArray = [];
let memoryCounter = [];
let playerArray = [];
let playerCounter = [];
let levelCounter = [];
let level;
let memory = [];
let sequence;
let user;
let playLevel;
let userCounter = [];
let startMemory;
let matchArrays = true;

/*Start button*/ 
$("#btn").on("click", function() {
    $("#btn").on("click").css("background-color", "beige");
      start = true;
      cardsArray = [];
      playerArray = [];
      memoryArray = [];
      memoryCounter = [];
      playerCounter = [];
      levelCounter = 1;
      clearInterval("game");
      setTimeout(function() {startMemory =
          setInterval("game", 2000);}, 2000);
        return startMemory;
});

function show() {
  console.log("Running show with: " + levelPattern);
  patternCopy = [];
  let h = 0;
  for (h = 0; h <= levelPattern.length; h++) {
    if (h === levelPattern.length) {
      lightUp("run", h);
    } else {
      lightUp(levelPattern[h], h);
    }
  }
}

function lightUp(name, num) {
  key.push(
    setTimeout(function() {
      if (name === "run") { 
        playerTurn = true;
      } else {
        pressed(name);
      }
    }, 850 * num)
  );
}

function newGame(){
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
    random = tiles[Math.floor(math.random) * tiles.length];
    return random;
}

let rounds = 0;
let i = rounds;
  for (i = 0; i < 20; i++) {
    document.write(i);
}

function tileActivate(_number) {
    tiles = document.querySelector("[data-tile ='${number}']");
}

let tiles = cardsArray;
  setTimeout(function() {
    levelCounter++;
}, 2000);
/* round update */
let updateRound = function(){
    rounds++;
  $("#showRound").css("showRounds");
};

let game = {
  count: 0,
  possibilties: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
  currentGame: [],
  player: [],
}
/* play round function */
function playRound(nextSequence) {
  $(".box").on("start").css("background-color", "#bee9e8", 1000);
    nextSequence.forEach((number, index) => {
      setTimeout(() => {
        tileActivate(number);
      }, (index + 1) * 550)
  });
  return nextSequwncw;
}
/* matchArrays and match update */
$(".box").on("click", function(){
    if(tiles == true && true);
        userCounter++;

    for(i = 0; i < userCounter.length; i ++){
        if (memory[i] != user[i]) {
            matchingArrays = false;
        }
    }
    if(matchArrays){
        playerArray = [];
        memoryCounter = [];
        levelCounter = [i];
        newMemory = [];
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
/* new round update  */


console.log(start, memory, memoryArray, memoryCounter, rounds);
console.log(playerCounter, playerArray, playLevel, levelCounter, cardsArray);
console.log(game, level, tiles, updateRound, newRound);
console.log(memory, matchArrays);