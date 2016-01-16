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
    if (row[i].cells[c].classList.contains("active1")) {
      var activeCell = row[i].cells[c];
      var nextCell = row[i].cells[(i + 1)];
      activeCell.classList.remove("active1");
      nextCell.classList.add("active1");
    }
  }
}

$('document').ready(function(){
$('document').keyup(function(a){
var player;
if(a.which == 81){
  player = "active1"
}
if(a.which == 80){
  player = "active2";
  }
}
});
});





  // for (var i = 0; i < table.rows.length; i++) {
  //   console.log(i);
  //   console.log(row1);
  //   if (table.rows[i].cells[i].classList.contains("active1")) {
     //  var nextCell = cell[(i + 1)];
  //     console.log(nextCell);
  //      activeCell.classList.remove("active1");
  //      activeCell.classList.add("cell1");
  //      nextCell.classList.remove("cell1");
  //      nextCell.classList.add("active1");
  //      nextCell.innerHTML = player;
  //     return;
  //   }
  // }
}
 
// table.rows[i].cells[i];
