define(['handlebars', 'underscore', 'backbone'], function(Handlebars, _, Backbone) {
	return Backbone.View.extend({
		
		template : function() { 
			return "no template defined" 
		},

		templateContext: function() {
			if (this.model) {
        if (typeof this.model.toJSON == 'function') {
          return this.model.toJSON();
        }
        return this.model;
      }
      return {};
		},

		render : function() {
      var html = this.template(this.templateContext());
			$(this.el).html(html);
      return this;
		}
	});
});