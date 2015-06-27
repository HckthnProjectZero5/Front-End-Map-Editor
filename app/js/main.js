var obstaclePosition = [];




$('.brick').draggable({

  snap: "#map div", snapMode: "inner", helper: 'clone',
  stop: function( event, position ) {
    console.log(position);

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
