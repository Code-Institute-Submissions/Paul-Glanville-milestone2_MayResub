let start = true;
let cardsArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let memoryArray = [];
let memoryCounter = [];
let playerArray = [];
let playerCounter = [];
let levelCounter = [];
let level;
let tiles;
let startMemory;

$("#btn").on("click", function() {
    start = "begin";
    $("#btn").addEventListener("begin").css("background-color", "red");
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

tiles = document.getElementsByTagName("p");
setTimeout(function() {
    levelCounter++;
}, 2000);

let game = {
    count: 0,
    currentGame: [],
    player: [],
};
console.log($("#btn"), start, memoryArray, memoryCounter);
console.log(playerCounter, playerArray, levelCounter, cardsArray);
console.log(game, tiles);