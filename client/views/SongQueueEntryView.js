// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'li',
  template: _.template('(<%= artist %>) <%= title %>'),

  events: {
    'click': function() {
      this.model.dequeue();
    },
  },

  initialize: function() {
    this.model.on('remove', function() {
      this.remove();
    }, this);
  },
  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
