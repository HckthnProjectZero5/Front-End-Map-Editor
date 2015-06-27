
$('.brick').draggable({
    helper: function(event) {
    return $('<div class="brick">Hullo!</div>');
  },
  snap: "#map div",
  snapMode: "inner"
});


$('#map div').each(function() {
  var $div = $(this);
  $div.droppable({
    drop: function() {
      // $(this).addClass('dropped').
      // css({
      //     top: $div.offset().top,
      //     left: $div.offset().left
      // });
      // $('#map').addClass('focus');
        }
    });
});

