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
      if (this._currentView) {
        this._currentView.remove();
      }



      this._currentView = this.get(name);

      console.log(this._currentView)

      if (this._currentView) {
        this._currentView.render();
        this.$el.append(this._currentView.$el);
      }

      return this;
    }
  });
});