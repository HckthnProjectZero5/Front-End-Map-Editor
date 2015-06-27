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
    newBlock.x = (pos.left - 350)/30;
    newBlock.y = (pos.top - 100)/30;
    console.log(newBlock);
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
      $(this).append(clonedEl);
    }  */
