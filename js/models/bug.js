(function() {

  'use strict';

  buggy.Models.Bug = Backbone.Model.extend({

    urlRoot: 'http://localhost:3000/bugs',

    defaults: {
      title: 'New Bug',
      resolved: false,
      details: '',
      cause: ''
    },

    validate: function(attrs) {
      if (!$.trim(attrs.title)) return "Title cannot be blank";
    },

    resolve: function() { this.save('resolved', true); }

  });

})();