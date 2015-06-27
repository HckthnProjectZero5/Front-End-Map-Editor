// Constructor for individual objects on the map

var obstaclePosition = [];

var Block = function(x){
  this.length = 1;
  this.width = 1;
  this.x = '';
  this.y = '';
};

// Constructor for entire map object
var Map = function(x){
  this.name = $('#title').val();
  this.budget = $('#budget').val();
  this.map = obstaclePosition;
};

// Makes post request to save map on in the database
var postMap = function(){

};

// Drag and drop functionality for building blocks
$('.brick').draggable({
  snap: "#map div", snapMode: "inner", helper: 'clone',
  stop: function( event, ui ) {
    var newBlock = new Block();
    var pos = ui.position;
    newBlock.x = (pos.left - 350)/30;
    newBlock.y = (pos.top - 100)/30;
    console.log(newBlock);
    obstaclePosition.push(newBlock);
  }
});

// function makeDraggable(el) {
//   el.draggable ({
//     revert: "invalid"
//   });
// }

$('#map div').each(function() {
  var $div = $(this);
  $div.droppable({
    drop: function(even, ui) {
      $(this).append($(ui.draggable).clone());
      $(ui.draggable).draggable('enable');
      // makeDraggable(ui.draggable);
    }
  });
});

/* drop: function(event, ui) {
      if ($(ui.helper).hasClass('cloned')) {
        return;
      }
      var clonedEl = $(ui.helper).clone();
      clonedEl.addClass('cloned');
      clonedEl.draggable({
        snap: '#grid, div',
        snapMode: 'inner'
      });
      $(this).append(clonedEl); */

// Click event creating map object and sending it to server
$('#submit').click(function(){
  Map();
  postMap();
});
