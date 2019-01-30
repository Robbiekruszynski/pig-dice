function hideStartGame() {
  $("#startGame").toggle();
  $("#menu").toggle();
}

function pvpMenu() {
  $("#menu").toggle();
  $("#pvpMenu").toggle();

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







});
