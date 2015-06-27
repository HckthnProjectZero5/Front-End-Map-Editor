var $grid = $('#map');
for (i = 0; i < 20; i++) {
    var row = '<div>';
    for (j = 0; j < 20; j++) {
      row += '<div class="sector"></div>';
    }
  row += '</div>';
  $grid.append(row);
}

var coordinates = function(element) {
  element = $(element);
  var top = element.position().top;
  var left = element.position().left;
  $('#results').text('X: ' + left + ' ' + 'Y: ' + top);
};

$('.brick').draggable({
  helper: "clone",
  snap: "#map div",
  snapMode: "inner",
  stop: function() {
    coordinates('.brick');
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
