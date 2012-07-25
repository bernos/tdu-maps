define(['backbone'], function(Backbone) {

  return Backbone.View.extend({

    initialize : function(options) {
      options = options || {};

      this._views = options.views || {};
    },

    addView : function(name, view) {
      this._views[name]  = view;
      return this;
    },

    removeView : function(name) {
      var v = this._views[name];
      this._views[name] = null;
      return v;
    },

    get : function(name) {
      return this._views[name];
    },

    setCurrentView : function(name) {
      var newView = this.get(name);

      if (newView == this._currentView) {
        return this;
      }

      if (this._currentView) {
        this._currentView.remove();
      }

      this._currentView = newView;

      if (this._currentView) {
        this._currentView.render();
        this.$el.append(this._currentView.$el);
        if (this._currentView.afterRender) {
          this._currentView.afterRender();
        }
      }

      return this;
    }
  });
});