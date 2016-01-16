var player1Position = 0;
var player2Position = 0;
// var row1 = $(".player1_strip");
// var row2 = $(".player2_strip");
var table = document.getElementById("table");


function updatePlayerPosition(player){
  var doc = document.getElementById("table");
  var row = doc.rows;
  for (var i = 0; i < row.length; i ++) {
    for (var c = 0; c < row[i].cells.length; c++) {
    console.log(row[i].cells[c]);
    if (row[i].cells[c].classList.contains(player)) {
      var activeCell = row[i].cells[c];
      var nextCell = row[i].cells[(c + 1)];
      activeCell.classList.remove(player);
      nextCell.classList.add(player);
      return;
    }
  }
}
}

$(document).ready(function() {
  $(document).keyup(function(e){
var player;

if(e.which == 81){
  console.log(e);
  player = "active1"
}
if(e.which == 80){
  console.log(e);
  player = "active2";
}

if (player == "active1" || player == "active2") {
        updatePlayerPosition(player);
        console.log("event");
      }
});
});