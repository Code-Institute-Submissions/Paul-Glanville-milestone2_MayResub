var game = {
    count = 0;
    possibilities = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
    currentGame = [],
    player = [],
}
function newGame() {
    clearGame();
}
function clearGame() {
    game.currentGame = [];
    game.count = 0;
    addCount();
}
function addCount() {
    game.count++;
    $('#clickNumber').addClass('animated fadeOutDown');

    setTimeout(function() {
            $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
  }, 200);
  
    generateMove();
    }
}
function generateMove() {
    game.currentGame.push(game.possibilities [(math.floor(math.random()*4)
        )]);
        showMoves();
}