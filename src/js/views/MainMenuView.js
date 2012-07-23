define(['jquery', './ViewBase'], function($, ViewBase) {
  return ViewBase.extend({
    initialize : function(options) {
      options.router.bind("all", this.onRouteChanged, this);
    },

    setActiveLink : function(link) {
      this.$('li.active').removeClass('active');
      this.$('i.icon-white').removeClass('icon-white');

      this.$('li.' + link).addClass('active');
      this.$('li.' + link + ' i').addClass('icon-white');
    },

    open : function() {
      if (!this.isOpen) {
        this.isOpen = true;
        $('body').addClass("menu-expanded");
      }
    },

    close : function() {
      if (this.isOpen) {
        this.isOpen = false;
        $('body').removeClass("menu-expanded");
      }
    },

    toggle : function() {
      if(this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },

    onRouteChanged : function(route) {
      switch(route) {
        case "route:home" :
          this.setActiveLink("home");
        break;

        case "route:stages" :
        case "route:stage" :
        case "route:live-feed" :
        case "route:map" :
        case "route:profile" :
        case "route:results" :
          this.setActiveLink("stages");
        break;

        case "route:teams" :
          this.setActiveLink("teams");
        break;

        case "route:standings" :
          this.setActiveLink("standings");
        break;

      }
    }
  });
});