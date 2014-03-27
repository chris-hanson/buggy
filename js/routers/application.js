(function() {

  'use strict';

  buggy.Routers.Application = Backbone.Router.extend({

    routes: {
      '': 'root',
      'bugs/:id': 'showBug',
      'about' : 'showAbout'
    },

    root: function() {
      buggy.vents.trigger('page:change:bugs');
    },

    showBug: function(id) {
      buggy.vents.trigger('page:change:bug', { id: id });
    },

    showAbout: function() {
      buggy.vents.trigger('page:change:about');
    },

  });

})();