function mainPVP() {
  this.playersArray = [];
  this.currentId = 0;
}

function mainPVAI() {
  this.playerArray = [];
  this.currentId = 0;
}


mainPVP.prototype.findPlayers = function(id) {
  for (var i = 0; i < this.playersArray.length; i++) {
    if (this.playersArray[i]) {
      if (this.playersArray[i].id == id) {
        return this.playersArray[i];
      }
    }
  };
  return false;
}

mainPVP.prototype.updateScore = function(score, player) {
  if (player == 0) {
    this.playersArray.player1Score = score;
  }
  if (player == 1) {
    this.playersArray.player2Score = score;
  }
}


mainPVP.prototype.PVP = function(players) {
  players.id = this.assignId();
  this.playersArray.push(players);


}

mainPVP.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


function hideStartGame() {
  $("#startGame").toggle();
  $("#menu").toggle();
}

function pvpMenu() {
  $("#menu").toggle();
  $("#pvpMenu").toggle();

}


function pvpAI() {
  $("#menu").toggle();
  $("#pvaiMenu").toggle();

}

function addPlayers(firstPlayer, secondPlayer, player1Score, player2Score) {
  this.firstPlayer = firstPlayer,
  this.secondPlayer = secondPlayer,
  this.player1Score = player1Score,
  this.player2Score = player2Score

}

function addPlayer(firstPlayer, difficulty) {
  this.firstPlayer = firstPlayer,
  this.difficulty = difficulty

}


function rollDice1() {
  return Math.floor((Math.random() * 6 + 1));

}

mainPVP.prototype.playerRoll = function(roll, player, currentPlayer) {
  if (player == 0){
    if(roll == 1){
      currentPlayer.player1Score = 0;
      $("#leftScore").text(currentPlayer.player1Score)
      leftHold();
    }else if(roll != 1){
      var score = currentPlayer.player1Score;
      currentPlayer.player1Score = score + roll;
      score = currentPlayer.player1Score;
      $("#leftScore").text(currentPlayer.player1Score);
    }
  }
  if (player == 1){
    if(roll == 1){
      currentPlayer.player2Score = 0;
      $("#rightScore").text(currentPlayer.player2Score)
      rightHold();
    }else if(roll != 1){
      var score = currentPlayer.player2Score;
      currentPlayer.player2Score = score + roll;
      score = currentPlayer.player2Score;
      $("#rightScore").text(currentPlayer.player2Score);
    }
  }
}
var currentPlayer = 0;


var MainPVP = new mainPVP();
var MainPVAI = new mainPVAI()

function leftHold() {
  currentPlayer = 1;
  $("#leftHold").hide();
  $("#rightHold").show();
}

function rightHold() {
  currentPlayer = 0;
  $("#leftHold").show();
  $("#rightHold").hide();
}

var previousRolls = [];
function showPreviousRolls(roll) {
  var length = previousRolls.length;
  var index = length - 1;
  console.log(previousRolls);
    if(1 == roll) {
      $("#lastRolls").append('<img src="img/side1.png" height="60px" width="60px">');
    }
    if(2 == roll) {
      $("#lastRolls").append('<img src="img/side2.png" height="60px" width="60px">');
    }
    if(3 == roll) {
      $("#lastRolls").append('<img src="img/side3.png" height="60px" width="60px">');
    }
    if(4 == roll) {
      $("#lastRolls").append('<img src="img/side4.png" height="60px" width="60px">');
    }
    if(5 == roll) {
      $("#lastRolls").append('<img src="img/side5.png" height="60px" width="60px">');
    }
    if(6 == roll) {
      $("#lastRolls").append('<img src="img/side6.png" height="60px" width="60px">');
    }



}


var winScore = 50;
var player1Score = 0;
var player2Score = 0;
var a = 0;
function gamePlay(){
  if(player1Score >= winScore || player2Score >= winScore) {
    $("#leftHold").hide();
    $("#rightHold").hide();
    $("#rollButton").hide();
  }
  var currentPlayerInfo = MainPVP.findPlayers(1);
  player1Score = currentPlayerInfo.player1Score;
  player2Score = currentPlayerInfo.player2Score;
  console.log(currentPlayerInfo);
  if (!(player1Score == winScore) && !(player2Score == winScore)) {
    if(a == 6) {
      a = 0;
    }
    if(currentPlayer == 0) {
      $("#lastRolls").text("");
      var diceRoll = rollDice1();
      $("#diceRoll").text(diceRoll);
      MainPVP.playerRoll(diceRoll, currentPlayer, currentPlayerInfo);
      previousRolls[a] = diceRoll;
      showPreviousRolls(diceRoll);

      a++;

    }else if(currentPlayer == 1) {
      $("#lastRolls").text("");
      var diceRoll = rollDice1();
      $("#diceRoll").text(diceRoll);
      MainPVP.playerRoll(diceRoll, currentPlayer, currentPlayerInfo)
      showPreviousRolls[a] = diceRoll;
      showPreviousRolls(diceRoll);
      a++;

    }
  }

}



$(document).ready(function() {
  $("form#playerNames").submit(function(event) {
    event.preventDefault();
    var player1Score = 0;
    var player2Score = 0;
    var player1 = $("input#players1").val();
    var player2 = $("input#players2").val();
    $("#pvpMenu").toggle();
    $("#game").toggle();
    $("#leftPlayer").text(player1);
    $("#rightPlayer").text(player2);
    var players = new addPlayers(player1, player2, player1Score, player2Score);
    $("#leftHold").show();

    MainPVP.PVP(players);

  });
  $("form#playerName").submit(function(evnet) {
    event.preventDefault();
    var player = $("input#player1").val();
    var difficulty = $("#difficulty").val();
    $("#pvaiMenu").toggle();
    $("#game").toggle();
    $("#rightPlayer").text(player);
    $("#leftPlayer").text(difficulty + " AI");

  });
});
