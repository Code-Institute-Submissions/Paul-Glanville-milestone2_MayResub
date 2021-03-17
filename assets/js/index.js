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
let tiles = cardsArray;
let playLevel;
let userCounter = [];
let startMemory;
let matchArrays = true;

/* Start function */
$("#btn").on("click", function(_start) {
      start = true;
      whichToChange();
      setTimeout(function() {startMemory =
          setInterval("game", 800);}, 800);
        return startMemory;
});

function numberChange(){
  randomNum = Math.floor(Math.random() * 16 + 1)
  let hashtag = "#";
  return hashtag.concat(randomNum.toString());
}

function getColour(){
  let colour = ["#bee9e8"];
  randomNum = Math.floor(Math.random() * 4);
  return(colour[randomNum]);
}
function whichToChange(){
  number = numberChange();
  colour = getColour();
  $(number).css("background-color", colour);
}

function show() {
  console.log("Running show with: " + roundPattern);
  patternCopy = [];
  let h = 0;
  for (h = 0; h <= roundPattern.length; h++) {
    if (h === roundPattern.length) {
      lightUp("run", h);
    } else {
      lightUp(roundPattern[h], h);
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
    }, 800 * num)
  );
}

let game = {
  count: 0,
  currentGame: [],
  player: [],
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
    document.getElementById(i);
}

function tileActivate() {
    tiles = document.querySelector("[data-tile ='${number}']");
}


  setTimeout(function() {
    levelCounter++;
}, 900);
/* round update */
let updateRound = function(){
    rounds++;
  $("showRounds").css("showRounds");
};

/* play round function */
function playRound(nextSequence) {
  $("number").css("background-color", 800);
    nextSequence.forEach((number, index) => {
      setTimeout(() => {
        tileActivate(number);
      }, (index + 1) * 550)
  });
  return nextSequence;
}
/* matchArrays and match update */
$("number").on("click", function(){
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
            setInterval(start, 700);}, 700);
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


console.log(memory, memoryArray, memoryCounter, rounds);
console.log(playerCounter, playerArray, playLevel, levelCounter, cardsArray);
console.log(game, level, updateRound, newRound);
console.log(memory, matchArrays);