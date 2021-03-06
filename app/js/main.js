$("#dialog").dialog({ autoOpen: false });

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
      $( "#dialog" ).dialog( "open" );

    });
  };


// Drag and drop functionality for building blocks
$('.brick, .tape, .computer').draggable({
  snap: "#map div", snapMode: "inner", helper: 'clone',
  stop: function( event, ui ) {
    var newBlock = new Block();
    var pos = ui.position;
    newBlock.x = (pos.left - 575)/28;
    newBlock.y = (pos.top - 25)/28;
    obstaclePosition.push(newBlock);
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
        snap: '#map div',
        snapMode: 'inner',
        start: function(event, ui) {
          reDraggedBlockX = ($(this).position().left - 575)/28;
          reDraggedBlockY = ($(this).position().top - 25)/28;

          for (var i = 0; i < obstaclePosition.length; i++) {
            var obj = obstaclePosition[i];

            if(obj.x === reDraggedBlockX && obj.y === reDraggedBlockY) {
              obstaclePosition.splice(i, 1);
              i--;
            }
          }
        },
        stop: function(event, ui) {
          var newBlock = new Block();
          newBlock.x = ($(this).position().left - 575)/28;
          newBlock.y = ($(this).position().top - 25)/28;
          obstaclePosition.push(newBlock);
        }
      });
      $(this).append(droppedItem);
    },
  });
});


// Click event creating map object and sending it to server
$('#submit').on('click', function(e) {
  e.preventDefault();
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

});


// Drop blocks in recycle bin
$('.recycleBin').droppable({
  drop: function (event, ui) {
    ui.helper.hide('explode');
    $(ui.draggable).remove();
  }
});




//Click event to clear map creation notification
$('#reset').on('click', function(e) {
  location.reload();
});
