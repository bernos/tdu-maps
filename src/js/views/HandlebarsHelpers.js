define(['handlebars'], function(Handlebars) {
	Handlebars.registerHelper('titlebar', function(context, options) {
		return new Handlebars.SafeString("<h2>" + options.fn(context) + "</h2>");
	});

	Handlebars.registerHelper('itemlist', function(context, options) {
		var str = '<ul class="nav item-list">';

		for(var i = 0, m = context.length; i < m; i++) {
			var item = context[i];

			str += '<li><a href="' + item.url + '"><div class="item-inner">'+item.label+' <i class="icon-chevron-right"></i></div></a></li>';
		}

		str += '</ul>';

		return new Handlebars.SafeString(str);
	});
});
