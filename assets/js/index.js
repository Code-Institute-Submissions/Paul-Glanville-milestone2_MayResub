/* Variables */
let start = false;
let memoryArray = [];
let memoryCounter = [];
let playerArray = [];
let playerCounter = [];
let levelCounter = [];
let level;
let key;
let memory = [];
let sequence = [];
let roundPattern = [];
let user;
let tiles;
let playLevel;
let userCounter = [];
let startMemory;
let matchArrays = true;

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
    nextSequence = [tiles];
}
function nextLevel() {
    random = tiles[Math.floor(math.random) * number.length];
    return random;
}

function tileActivate() {
    tiles = document.querySelector("[data-tile ='${number}']");
}
/* Start function */
$("#btn").on("click", function(start) {
      start = true;
  window.show();
      whichToChange();
      setTimeout(function() {startMemory =
          setInterval("sequence", 500);}, 500);
        return startMemory;
});

function numberChange(){
  randomNum = Math.floor(Math.random() * 16 + 1);
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
  hashtag = ["#"];
  let h = 0;
  for (h = 0; h <= hashtag.length; h++) {
    if (h === hashtag.length) {
      lightUp("num", h);
    } else {
      lightUp(hashtag[h], h);
    }
  }
  console.log("Running show with: " + hashtag);
  return hashtag;
}

function lightUp(name, num) {
    setTimeout(function() {
      if (name === num) {
        playerTurn = true;
      } else {
      let pressed = name;
      }
    }, 500 * num);
}

  setTimeout(function() {
    levelCounter++;
}, 500);
/* round update */
let updateRound = function(){
    rounds++;
  $("showRounds").css("showRounds");
};

/* play round function */
function playRound(nextSequence) {
  $(number).css(500);
    nextSequence.forEach((number, index) => {
      setTimeout(() => {
        tileActivate(number);
      }, (index + 1) * 500)
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
        levelCounter = [];
        newMemory = [];
        setTimeout(function() {startMemory =
            setInterval(start, 500);}, 500);
    }
})
function newRound() {
  level += 1;
  Container.addClass(unclickable);
  info.textContent = "wait for sequence to finish";
  heading.textContent = "level ${level} of 20";
  sequence = hashtag;
  nextSequence.push(nextStep());
  playlevel(nextSequence);
  setTimeout(() => {
      playerTurn(turn);
  }, level*500+1000);

  newRound.addEventListener(sequence);
  return sequence;
}

console.log(memory, memoryArray, memoryCounter);
console.log(playerCounter, playerArray, playLevel, levelCounter);
console.log(game, level, updateRound, newRound);
console.log(memory, matchArrays);