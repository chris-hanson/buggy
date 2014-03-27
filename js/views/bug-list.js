(function() {

  'use strict';

  buggy.Views.BugList = Backbone.View.extend({

    tagName: 'tr',

    className: 'bug',

    events: {
      'click .resolve-bug': 'resolveBug',
      'click .delete-bug': 'deleteBug'
    },

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    template: _.template($('#bug-list-template').remove().html()),

    render: function() {
      if (this.model.get('resolved')) this.$el.addClass('resolved');
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    resolveBug: function() { this.model.resolve(); },

    deleteBug: function() { this.model.destroy(); }

  });

})();