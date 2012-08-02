define([
  "underscore",
  "handlebars",
  "text!templates/ResultFeedSelectList.handlebars",
  "./ViewBase"
], 

function(_, handlebars, template, ViewBase) {
  return ViewBase.extend({

    template : Handlebars.compile(template),

    initialize : function(options) {
      if (options.formatTemplateItem) {
        this.formatTemplateItem = options.formatTemplateItem;
      }
    },

    events : {
      'click .select-list .selected-item' : 'toggleItems',
      'click .select-list .item-list a' : 'itemSelected'
    },

    itemSelected : function(e) {
      this.$('.select-list .item-list').addClass('invisible');
    },

    toggleItems : function(e) {

      var $list = this.$('.select-list .item-list');

      if ($list.hasClass('invisible')) {
        $list.removeClass('invisible');
      } else {
        $list.addClass('invisible');
      }

      e.preventDefault();
    },

    itemClicked : function(e) {
      var id = $(this).getAttr("data-item-id");
    },

    setSelectedItem : function(item) {
      this._selectedItem = item;
      this.render();
    },

    getSelectedItem : function() {
      if (!this._selectedItem) {
        this._selectedItem = this.model.models[0];
      }
      return this._selectedItem;
    },

    formatTemplateItem : function(item) {
      return item;
    },

    render : function() {
      ViewBase.prototype.render.apply(this, arguments);
      this.delegateEvents(this.events);
      return this;
    },

    templateContext: function() {
      // Find the selected item
      var view = this;
      var selectedItem = this.getSelectedItem();
      var items = _.filter(this.model.models, function(item) {
        return item != selectedItem;
      });

      var context = {
        selectedItem : this.formatTemplateItem(selectedItem),
        items : _.map(items, function(item) {
          return view.formatTemplateItem(item);
        })
      };

      console.log("context ", context);

      return context;
    }
  });
});