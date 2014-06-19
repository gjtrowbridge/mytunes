// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  model: SongModel,
  initialize: function(){
    for (var i = 0; i < this.length; i++) {
      this.at(i).enqueue();
    }
    this.on('add', function(song) {
      song.enqueue();
    }, this);

    this.on('ended', function(song) {
      console.log('ended:');
      console.log(song);
      song.dequeue();
    }, this);

    this.on('dequeue', function(song) {
      console.log('dequeuing');
      console.log(song);
      if (this.at(0) === song) {
        this.remove(song);
        if (this.length !== 0) {
          this.playFirst();
        }
      } else {
        this.remove(song);
      }
    }, this);

    this.on('enqueue', function(song) {
      if (this.at(0) === song) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});
