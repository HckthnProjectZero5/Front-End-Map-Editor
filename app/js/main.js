// Establishes an array of objects on the map
var obstaclePosition = [];

// Constructor for individual objects on the map
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
    console.log(ui.position);
    newBlock.x = (pos.left - 775)/30;
    newBlock.y = (pos.top - 25)/30;
    console.log(newBlock);
    obstaclePosition.push(newBlock);
 }
});

$('#map div').each(function() {
  var $div = $(this);
  $div.droppable({
    drop: function(even, ui) {
      $(this).append($(ui.draggable).clone());
    }
  });
});

// Click event creating map object and sending it to server
$('#submit').click(function(){
  Map();
  postMap();
});
