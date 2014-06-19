// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'div',
  className: 'songQueueView',
  initialize: function() {
    this.collection.forEach(this.addOne, this);
    this.collection.on('add', function(songModel) {
      this.addOne(songModel);
      this.render();
    }, this);
    this.$el.html('<p><strong>Song Queue</strong></p><ul></ul>');
    this.render();
  },

  render: function() {
    return this.$el;
  },

  addOne: function(songModel) {
    var sqev = new SongQueueEntryView({model:songModel});
    sqev.render();
    this.$el.find('ul').append(sqev.$el);
  },

});
