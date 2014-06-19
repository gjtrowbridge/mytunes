// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(songData) {
    _.each(songData, function(songParams) {
      this.add(new SongModel(songParams));
    }, this);
  },

});
