$('.brick').draggable({
  helper: 'clone'
});


$('div', '#map').each(function() {
    var $div = $(this);
    $div.droppable({
        drop: function() {
            $('.brick').addClass('dropped').
            css({
                top: $div.offset().top,
                left: $div.offset().left
            });
            $('#map').addClass('focus');
        }
    });
});
