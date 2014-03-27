(function() {

  'use strict';

  buggy.Views.About = Backbone.View.extend({

    template: $('#about-template').remove().html(),

    render: function() {
      buggy.vents.trigger('dom:change:title', 'About');
      this.$el.html(this.template);
      return this;
    }

  });

})();