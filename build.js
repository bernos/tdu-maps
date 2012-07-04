({
  baseUrl: "src/js",
  paths: {
    jquery : "lib/jquery-1.7.2",
    underscore: "lib/underscore",
    backbone: "lib/backbone",
    async: "lib/requirejs-plugins/async",
    domready: "lib/requirejs-plugins/domready"
  },
  shim: {
    backbone: {
      deps: ["underscore"],
      exports: function()  {
        return Backbone.noConflict();
      }
    },
    underscore: {
      exports : function() {
        return _.noConflict();
      }
    }
  },
  name: "main",
  out: "src/js/main-built.js"
})