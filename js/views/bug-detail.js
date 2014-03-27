(function() {

  'use strict';

  buggy.Views.BugDetail = Backbone.View.extend({

    className: 'bug-details',

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'invalid', function(m,e) { alert(e); });
    },

    events: {
      'change :input': 'updateBug'
    },

    template: _.template($('#bug-detail-template').remove().html()),

    render: function() {
      buggy.vents.trigger('dom:change:title', this.model.get('title'));
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    updateBug: function() {
      var title, details, resolved, cause;

      title = this.$('#edit-bug-title').val();
      details = this.$('#edit-bug-details').val();
      resolved = this.$('#edit-bug-resolved').is(':checked');
      cause = this.$('#edit-bug-cause').val();

      this.model.save({
        title: title,
        details: details,
        resolved: resolved,
        cause: cause
      });
    }

  });

})();