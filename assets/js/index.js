/* Variables */
let start = false;
let memoryArray = [];
let memoryCounter = [];
let playerArray = [];
let playerCounter = [];
let levelCounter = [];
let level = 1;
let memory = [];
let sequence = [];
let roundPattern = [];
let user;
let playLevel;
let userCounter = [];
let startMemory;
let matchArrays = true;


let randomTileRange = (min, max) => {
return Math.floor(Math.random() * (max - min) + min);
}
let randomTilesPlaces = (randomTilesNumber) => {
    let totalNumberOfTiles = 16;
    let randomTilesPlaces = [];
    while (randomTilesPlaces.length < randomTilesNumber) {
    }
}

/* Start function */
window.addEventListener('load', () => {
    let tilesContainer = document.querySelector("#tiles-container");
    let begin = document.querySelector("#btn");
    let tiles = tilesContainer.children;
    console.log(begin);
    begin.addEventListener("click", function() {
        console.log('meme')
      start = true;
      tilePlaces = randomTilesPlaces(level)
      console.log(tilePlaces);
      tilePlaces.forEach((place, index) => {
      let tile = tiles[position - 1];
        if (tile) {
            setTimeout(() => { 
                tile.style.backgroundColor = '#bee9e8';
            }, 0 + index * 500);
            setTimeout(() => {
                tile.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
        }
      })
      level = level + 1; /* incrfease level by 1 */
    });

    /* whichToChange();
    begin.addEventListener("click", () => {
    if (tiles == true && true);
        userCounter++;

    for(let i = 0; i < userCounter.length; i ++){
        if (memory[i] != user[i]) {
            matchingArrays = false;
        }
    }
    if(matchArrays){
        playerArray = [];
        memoryCounter = [];
        levelCounter = [];
        newMemory = [];
        /*setTimeout(function() {startMemory =
            setInterval(start, 500);}, 500);
    }*/
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

function nextLevel() {
    random = tiles[Math.floor(math.random) * number.length];
    return random;
}

function show() {
  hashtag = ["#"];
  let h = 0;
  for (h = 0; h <= hashtag.length; h++) {
    if (h === hashtag.length) {
      lightUp("run", h);
    } else {
      lightUp(hashtag[h], h);
    }
  }
  console.log("Running show with: " + hashtag);
  return hashtag;
}

function lightUp(name, number) {
    setTimeout(function() {
      if (name === number) {
        playerTurn = true;
      } else {
        selected = name;
      }
    }, 500 * number);
}
    setTimeout(function() {
    levelCounter++;
}, 500);
/* round update */
let updateRound = function(){
    rounds++;
  $("showRounds").css("showRounds");
};

/* play round function 
function playRound(nextSequence) {
    nextSequence.forEach(function(number, index) {
      setTimeout(function() {
        tileActivate(number);
      }, (index + 1) * 500);
  });
  return nextSequence;
}*/