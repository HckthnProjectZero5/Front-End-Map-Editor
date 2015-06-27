var obstaclePosition = [];

var Block = function(x){
  this.length = 1;
  this.width = 1;
  this.x = '';
  this.y = '';
};




$('.brick').draggable({

  snap: "#map div", snapMode: "inner", helper: 'clone',
  stop: function( event, ui ) {
    var newBlock = new Block();
    var pos = ui.position;
    console.log(pos);
    newBlock.x = (pos.left - 352)/30;
    newBlock.y = (pos.top - 82)/30;
    console.log(newBlock);
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
