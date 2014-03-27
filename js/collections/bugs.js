(function() {

  'use strict';

  buggy.Collections.Bugs = Backbone.Collection.extend({
    
    url: 'http://localhost:3000/bugs',

    model: buggy.Models.Bug,

    comparator: 'id'

  });

})();