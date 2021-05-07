/* Variables */
let start = false;
let level = 1;
let currentTilePlaces = [];
let playEnabled = true;

/* this section to the end of the start button section is inspired and by the content in game.js that my mentor has shown me and i have edited to personalise it more of the variable names and declarations */
let randomTileRange = (min, max) => { /* this is the range in which the tiles are set and has a minimum and maximum */
return Math.floor(Math.random() * (max - min) + min);
};
let randomTilesPlaces = (randomTilesNumber) => { /* selects and lights up a random tile in a sequence*/
    let totalNumberOfTiles = 16;
    let randomTilesPlaces = [];
    while (randomTilesPlaces.length < randomTilesNumber) {
        nextTilePlace = randomTileRange(1, totalNumberOfTiles);
    console.log(nextTilePlace);
    if (!randomTilesPlaces.includes(nextTilePlace)) {
      randomTilesPlaces.push(nextTilePlace);
    }
  }
  return randomTilesPlaces;
};
/* Converts the id name into the number it represents */
const tileIdToNumber = (tileId) => {
    switch(tileId) {
            case 'one':
                return 1;
            case 'two':
                return 2;
            case 'three':
                return 3;
            case 'four':
                return 4;
            case 'five':
                return 5;
            case 'six':
                return 6;
            case 'seven':
                return 7;
            case 'eight':
                return 8;
            case 'nine':
                return 9;
            case 'ten':
                return 10;
            case 'eleven':
                return 11;
            case 'twelve':
                return 12;
            case 'thirteen':
                return 13;
            case 'fourteen':
                return 14;
            case 'fifteen':
                return 15;
            case'sixteen':
                return 16;
        }
};

const updateLevelsInfo = () => { /* updates the level counter on each new round */
    document.querySelector("#showRounds").innerHTML = "Round " +  level;
};

const resetGame = () => {
    level = 1;
    updateLevelsInfo();
    playEnabled = true;
};

/* Start function */
window.addEventListener('load', () => { /* listens out for when the window is opened for the variables and functions */
    let tilesContainer = document.querySelector("#tiles-container");
    let begin = document.querySelector("#start-btn");
    let reset = document.querySelector("#reset-btn");
    let tiles = tilesContainer.children;
    begin.addEventListener("click", function() { /* listens out for when the start button has been clicked and calls the "#start-btn" id under the variable name */
        alert("Welcome, let the round Begin!");  // display string message
        if (playEnabled === false) {
            return;
        }

        start = true;
        playEnabled = false;

        currentTilePlaces = randomTilesPlaces(level);
        console.log(currentTilePlaces);
        currentTilePlaces.forEach((place, index) => {
        let tile = tiles[place - 1];
            if (tile) {
                setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                    tile.style.backgroundColor = '#bee9e8';
                }, 0 + index * 500);
                setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                    tile.style.backgroundColor = '#62b6cb';
                    if (index === currentTilePlaces.length - 1) {
                        playEnabled = true;
                    }
                }, ((level+ 1) * 1000));
            }
        });
      
    });

    reset.addEventListener("click", function() { /* resets the level counter and progress once reset button has been clicked */
        resetGame();
    });

    setupTileClickListener();
});



/* with this function the tiles should each light up once clicked by the user, if correct the same colour as the sequence but if incorrect then they light up red. */
function setupTileClickListener() {
    let tilesContainer = document.querySelector("#tiles-container");
    tilesContainer.addEventListener('click', (event) => {/* this part of code is supposed to provide one function/variable name to call the other id's within #tiles-container, to allow the tiles to change shade or colour upon being clicked. */
        const clickElement = event.target;
        if (clickElement.classList.contains("box")) {
            console.log(clickElement);
            const tileNumber = tileIdToNumber(clickElement.id);
            console.log(tileNumber);
            console.log(currentTilePlaces);

            if (currentTilePlaces.includes(tileNumber)) {
                setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                    clickElement.style.backgroundColor = '#bee9e8';
                }, 100);
                setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                    clickElement.style.backgroundColor = '#62b6cb';
                }, 1500);
                currentTilePlaces = currentTilePlaces.filter((tile) => {
                    return tile !== tileNumber;
                });
                if (currentTilePlaces.length == 0) {
                    setTimeout(() => {
                        alert("Congratulations! next round, Click Start and Get ready!");
                        level = level + 1; /* incrfease level by 1 */
                        updateLevelsInfo();
                    }, 1500);
                    return;
                }
            } else {
                setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                    clickElement.style.backgroundColor = 'red';
                }, 100);
                setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                    clickElement.style.backgroundColor = '#62b6cb';
                    alert("Bad luck! Try again");  // display string message
                    resetGame();
                }, 1000);
            }
            
            

        }
        let tiles = event.tiles;
        
    });
}
