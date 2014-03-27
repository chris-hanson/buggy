// Global app object
(function() {
  'use strict';

  window.buggy = {
    Models: {},
    Views: {},
    Collections: {},
    Routers: {},
    app: {},
    vents: _.extend({}, Backbone.Events),
    
    init: function(el) {
      this.app.applicationRouter = new this.Routers.Application();
      this.app.applicationView = new this.Views.Application({ el: el });

      Backbone.history.start();
    }
  };

})();

// Init when doms ready
$(function() {
  'use strict';

  buggy.init('#app');
});