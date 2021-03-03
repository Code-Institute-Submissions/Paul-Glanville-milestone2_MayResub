let start = true;
let cardsArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let memoryArray = [];
let memoryCounter = 0;
let playerArray = [];
let playerCounter = 0;
let levelCounter;
let level = 0;

$("#btn").on("click", function() {
    start = begin;
    $("#btn").css("background-color", 'red');
        start = true;
        playerArray = [];
        memoryArray = [];
        memoryCounter = 0;
        playerCounter = 0;
        levelCounter = 1;
    $(".box").html("event");
        clearInterval(startMemory);
        setTimeOut(function() {startMemory =
            setInterval(begin, 2000);}, 2000);
});
console.log(start, memoryArray, memoryCounter, clearInterval);
console.log(playerCounter, playerArray, levelCounter, cardsArray);