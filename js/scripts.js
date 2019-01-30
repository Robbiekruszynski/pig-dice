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










$(document).ready(function() {
  $("form#playerNames").submit(function(event) {
    event.preventDefault();
    var player1 = $("input#players1").val();
    var player2 = $("input#players2").val();
    $("#pvpMenu").toggle();
    $("#game").toggle();
    $("#leftPlayer").text(player1);
    $("#rightPlayer").text(player2);
    console.log("IS working");

  });
  $("form#playerName").submit(function(evnet) {
    event.preventDefault();
    var player = $("input#player1").val();
    var difficulty = $("#difficulty").val();
    $("#pvaiMenu").toggle();
    $("#game").toggle();
    $("#rightPlayer").text(player);
    $("#leftPlayer").text(difficulty + " AI");





  })






});
