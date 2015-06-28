// Constructor for individual objects on the map

var obstaclePosition = [];


// Constructor for individual objects on the map

var Block = function(x){
  this.length = 1;
  this.width = 1;
  this.x = '';
  this.y = '';
};


// Makes post request to save map on in the database

var url = 'https://fierce-wave-2814.herokuapp.com/levels/new';

var postMap = function(map){
  $.ajax({
    url: url,
    type: 'POST',
    data: map
    }).done( function (data) {
      console.log(data);
    });
  };


// Drag and drop functionality for building blocks
$('.brick, .tape, .computer').draggable({
  snap: "#map div", snapMode: "inner", helper: 'clone',
  stop: function( event, ui ) {
    var newBlock = new Block();
    var pos = ui.position;
    console.log(ui.position);
    newBlock.x = (pos.left - 575)/28;
    newBlock.y = (pos.top - 25)/28;
    console.log(newBlock);
    obstaclePosition.push(newBlock);
  },
  start: function( event, ui) {
    var pos = ui.position;
    console.log(pos);
    x = (pos.left - 575)/28;
    y = (pos.top - 25)/28;
    var newArray = [];
    obstaclePosition.map(function(item){
      if (item.x !== x || item.y !== y){
        newArray.push(item);
        obstaclePosition = newArray;
      }
    });
  }
});

$('#map div').each(function() {
  var $div = $(this);
  $div.droppable({
    hoverClass: 'highlight',
    drop: function (event, ui) {
      // Re-enable draggability of dropped block
      if ($(ui.draggable).hasClass('copied')) {
        return;
      }
      var droppedItem = $(ui.draggable).clone().addClass('copied');
      droppedItem.draggable ({
        snap: "#map div",
        snapMode: "inner",
      });
      $(this).append(droppedItem);
      var drag_id = $(ui.draggable).attr("id");
      var targetElem = $(this).attr("id");
      deleteMe = true;
    }
  });
});


// Click event creating map object and sending it to server
$('#submit').on('click', function(e) {
  // e.preventDefault();

  var name = $('#title').val();
  var budget = $('#budget').val();
  var map = {
  properties: {
    name: name,
    budget: budget,
    map: obstaclePosition
    }
  };

  postMap(map);


  console.log(map);
});


// Drop blocks in recycle bin
$('.recycleBin').droppable({
  drop: function (event, ui) {
    ui.helper.hide('explode');
    $(ui.draggable).remove();
  }
});
