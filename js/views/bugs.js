(function() {

  'use strict';

  buggy.Views.Bugs = Backbone.View.extend({

    className: 'table table-condensed table-hover',

    tagName: 'table',

    initialize: function() {
      this.listenTo(this.collection, 'reset', this.addAll);
      this.listenTo(this.collection, 'add', this.addOne);
    },

    template: $('#bugs-template').remove().html(),

    render: function() {
      buggy.vents.trigger('dom:change:title', 'All Bugs');
      this.addAll();
      return this;
    },

    addAll: function() {
      this.$el.html(this.template);
      this.collection.forEach(this.addOne, this);
    },

    addOne: function(bug) {
      var view = new buggy.Views.BugList({ model: bug });
      this.$('tbody').append(view.render().el);
    }

  });

})();