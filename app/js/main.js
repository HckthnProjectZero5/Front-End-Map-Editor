
$('.brick').draggable({
 snap: "#map div", snapMode: "inner", helper: 'clone'
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

