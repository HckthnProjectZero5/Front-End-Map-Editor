
$('.brick').draggable({
    helper: "clone",
  snap: "#map div",
  snapMode: "inner",
  stop: function( event, ui ) {
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
