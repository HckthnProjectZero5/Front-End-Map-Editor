
$('.brick').draggable({
 snap: "#map div", snapMode: "inner", helper: 'clone',
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


