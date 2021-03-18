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


function user() {
    playerTurn = true;
    let tilesContainer = document.querySelector("#tiles-container");
    tilesContainer.addEventListener("click", (event) => {
        let tiles = event.tiles;
        if (tiles.id) {
            '1';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('1');
            '2';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('2');
            '3';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('3');
            '4';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('4');
            '5';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('5');
            '6';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('6');
            '7';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('7');
            '8';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('8');
            '9';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('9');
            '10';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('10');
            '11';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('11');
            '12';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('12');
            '13';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('13');
            '14';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('14');
            '15';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('15');
            '16';
            setTimeout(() => { /* changes the colour of the tiles after a certain amount of time */
                tiles.style.backgroundColor = '#bee9e8';
            },  0 + index * 500);
            setTimeout(() => { /* reverts the tiles back to their original colour at end of sequence */
                tiles.style.backgroundColor = '#62b6cb';
            }, ((level+ 1) * 1000))
            console.log('16');
        }
    });
};


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
