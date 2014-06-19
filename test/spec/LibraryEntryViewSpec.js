describe('LibraryEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new LibraryEntryView({model: model});
    view.render();
  });

  // This spec passes already, but it's mutually exclusive with the one below.
  // Comment it out when implementing the song queue.
  xit ('plays clicked songs', function(){
    sinon.spy(SongModel.prototype, 'play');

    view.$el.children().first().click();
    expect(model.play).to.have.been.called;

    SongModel.prototype.play.restore();
  });

  it('queues clicked songs', function(){
    sinon.spy(SongModel.prototype, 'enqueue');

    view.$el.children().first().click();
    expect(model.enqueue).to.have.been.called;

    SongModel.prototype.enqueue.restore();
  });

  it('clicks upvote', function(){
    sinon.spy(SongModel.prototype, 'upvote');

    view.$el.find('td.up').click();
    expect(model.upvote).to.have.been.called;

    SongModel.prototype.upvote.restore();
  });

  it('clicks downvote', function(){
    sinon.spy(SongModel.prototype, 'downvote');

    view.$el.find('td.down').click();
    expect(model.downvote).to.have.been.called;

    SongModel.prototype.downvote.restore();
  });


});
