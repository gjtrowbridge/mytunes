// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="enqueue">(<%= artist %>)</td>' +
                        '<td class="enqueue"><%= title %></td>' +
                        '<td class="enqueue">plays: <%= playCount %></td>' +
                        '<td class="up">up: <span><%= upvotes %></span></td>' +
                        '<td class="down">down: <span><%= downvotes %></span></td>'),

  events: {
    'click td.enqueue': function() {
      this.model.enqueue();
    },
    'click td.up': function() {
      this.model.upvote();
    },
    'click td.down': function() {
      this.model.downvote();
    },

  },
  initialize: function() {
    this.model.on('change', function() {
      this.render();
    }, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
