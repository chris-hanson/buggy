(function() {

  'use strict';

  buggy.Views.Application = Backbone.View.extend({

    initialize: function() {
      this.listenTo(buggy.vents, 'page:change:bugs', this.onPageChangeBugs);
      this.listenTo(buggy.vents, 'page:change:bug', this.onPageChangeBug);
      this.listenTo(buggy.vents, 'page:change:about', this.onPageChangeAbout);
      this.listenTo(buggy.vents, 'dom:change:title', this.onDomChangeTitle);
    },

    onPageChangeBugs: function() {
      this.setActiveNavItem('home');

      if (!buggy.app.bugsCollection) {
        buggy.app.bugsCollection = new buggy.Collections.Bugs();
        buggy.app.bugsCollection.fetch({ reset: true });
        buggy.app.bugsView = new buggy.Views.Bugs({
          collection: buggy.app.bugsCollection
        });
      }

      this.render(buggy.app.bugsView.render().el);
      this.renderNewBugView();
    },

    onPageChangeBug: function(attrs) {
      var bug, view, _this;

      _this = this;

      this.setActiveNavItem();

      if (this.curBugView) this.curBugView.remove();
      
      if (buggy.app.bugsCollection) {
        try {
          bug = buggy.app.bugsCollection.get(attrs.id);
          renderBug();
        } catch (e) { fetchBug(attrs.id); }
      } else {
        fetchBug(attrs.id);
      }

      function fetchBug(id) {
        bug = new buggy.Models.Bug({ id: id });
        bug.fetch({
          success: renderBug,
          error: function() { window.location.hash = ''; }
        });
      }

      function renderBug() {
        view = new buggy.Views.BugDetail({ model: bug });
        _this.render(view.render().el);
        _this.curBugView = view;
      }
    },

    onPageChangeAbout: function() {
      this.setActiveNavItem('about');

      var view = new buggy.Views.About();
      this.render(view.render().el);
    },

    onDomChangeTitle: function(str) { document.title = "Buggy | " + str; },

    renderNewBugView: function() {
      var view = new buggy.Views.BugNew();
      this.$el.prepend(view.render().el);
    },

    setActiveNavItem: function(klass) {
      $('.nav .active').removeClass('active');
      if (klass) $('.nav .' + klass).addClass('active');
    },

    render: function(html) { this.$el.html(html); }

  });

})();