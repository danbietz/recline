(function ($) {

module("View - Explorer");

test('basic explorer functionality', function () {
  var $el = $('<div class="test-view-explorer-basic" />');
  $('.fixtures .data-explorer-here').append($el);
  var dataset = Fixture.getDataset();
  var explorer = new recline.View.DataExplorer({
    model: dataset,
    el: $el
  });
  var $explorer = $el.find('.recline-data-explorer');
  equal($explorer.length, 1);
  $el.remove();
});

test('getState', function () {
  var $el = $('<div class="test-view-explorer-getstate" />');
  $('.fixtures .data-explorer-here').append($el);
  var dataset = Fixture.getDataset();
  var explorer = new recline.View.DataExplorer({
    model: dataset,
    el: $el
  });
  var state = explorer.getState();
  ok(state.query);
  equal(state.query.size, 100);
  deepEqual(state['view-grid'].hiddenFields, []);
  $el.remove();
});

})(this.jQuery);
