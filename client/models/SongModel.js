// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set(params);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    console.log('play called');
    console.log(this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
    console.log('enqueue called');
    console.log(this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

});
