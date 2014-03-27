(function() {

  'use strict';

  buggy.Views.BugNew = Backbone.View.extend({

    events: {
      'submit': 'createNewBug'
    },

    template: $('#new-bug-template').remove().html(),

    className: 'new-bug',

    render: function() {
      this.$el.html(this.template);
      return this;
    },

    createNewBug: function(e) {
      e.preventDefault();

      var bug = buggy.app.bugsCollection.create({
        title: this.$('.title').val()
      }, { wait: true });

      if (bug.validationError) alert(bug.validationError);
    }

  });

})();
