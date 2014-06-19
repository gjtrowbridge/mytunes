// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set(params);
    this.set({
      playCount: 0,
      playing: false,
      upvotes: 0,
      downvotes: 0
    });
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set({
      playCount: this.get('playCount') + 1,
      playing: true
    });
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
    this.set({
      playing: false
    });
  },

  upvote: function() {
    this.set({
      upvotes: this.get('upvotes') + 1
    });
  },

  downvote: function() {
    this.set({
      downvotes: this.get('downvotes') + 1
    });
  },
});
