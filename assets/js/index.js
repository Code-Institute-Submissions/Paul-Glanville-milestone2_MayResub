/* Variables */
let start = false;
let memoryArray = [];
let memoryCounter = [];
let playerArray = [];
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
let playerTurn = false;


let randomTileRange = (min, max) => { /* this is the range in which the tiles are set and has a minimum and maximum */
return Math.floor(Math.random() * (max - min) + min);
}
let randomTilesPlaces = (randomTilesNumber) => { /* selects and lights up a random tile in a sequence*/
    let totalNumberOfTiles = 16;
    let randomTilesPlaces = [];
    while (randomTilesPlaces.length < randomTilesNumber) {
        nextTilePlace = randomTileRange(1, totalNumberOfTiles);
    console.log(nextTilePlace);
    if (!randomTilesPlaces.includes(nextTilePlace)) {
      randomTilesPlaces.push(nextTilePlace)
    }
  }
  return randomTilesPlaces;
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
        let tile = tiles[place - 1];
            if (tile) {
                setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                    tile.style.backgroundColor = '#bee9e8';
                }, 0 + index * 500);
                setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                    tile.style.backgroundColor = '#62b6cb';
                }, ((level+ 1) * 1000))
            }
        })
      level = level + 1; /* incrfease level by 1 */
    });
});

this.addEventListener("click", (place) => {
    playerTurn = true;
    let tilesContainer = document.querySelector("#tiles-container");
    let tiles = tilesContainer.children;
    console.log(tiles);
    tilesContainer.addEventListener("click", () => {
    let tile = tiles[place];
        if (tile) {
            setTimeout("click", () => { /* changes the colour of the tiles after a certain amount of time */
                tile.style.backgroundColor = '#bee9e8';
            });
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tile.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
        }
    });
});  


/*let matchArrays = tiles() {
    if (matchArrays == true && true)
    console.log(matchArrays);
    for(let i = 0; i < userCounter.length; i ++){
        if (memory[i] != user[i]) {
            matchArrays = false;
        }else{ matchArrays = true; { 
        }
    }

});*/
