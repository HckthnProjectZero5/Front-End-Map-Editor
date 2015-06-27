
$('.brick').draggable({
    helper: function(event) {
    return $('<div class="brick">Hullo!</div>');
  },
  snap: "#map div",
  snapMode: "inner",
  stop: function( event, ui ) {
  }
});

$('#map div').each(function() {
  var $div = $(this);
  $div.droppable({
    drop: function() {

        }
    });
});


