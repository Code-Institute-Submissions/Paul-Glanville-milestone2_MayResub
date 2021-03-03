let start = false;
let cardsArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let memoryArray = [];
let memoryCounter = [];
let playerArray = [];
let playerCounter = [];
let levelCounter = [];
let level;

$("#btn").on("click", function() {
    start = true;
    $("#btn").addEventListener("begin").css("background-color", "red");
        start = "begin";
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
console.log($("#btn"), start=true, memoryArray, memoryCounter, clearInterval);
console.log(playerCounter, playerArray, levelCounter, cardsArray);