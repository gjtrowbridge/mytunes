describe('SongQueueEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new SongQueueEntryView({model: model});
    view.render();
  });

  // This spec passes already, but it's mutually exclusive with the one below.
  // Comment it out when implementing the song queue.
  it ('calls dequeue on its model when clicked', function(){
    sinon.spy(view.model, 'dequeue');

    view.$el.click();
    expect(view.model.dequeue).to.have.been.called;
    view.model.dequeue.restore();
  });

});
