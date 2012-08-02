define(['handlebars', '../helpers/date'], function(Handlebars) {
	Handlebars.registerHelper('titlebar', function(context, options) {
		return new Handlebars.SafeString("<h2>" + options.fn(context) + "</h2>");
	});

	Handlebars.registerHelper('feed-date', function(date) {
		return date.toString("ddd MMM d yyyy, h:mmtt");
	});

	Handlebars.registerHelper('itemlist', function(context, options) {
		var str = '<ul class="nav item-list">';

		for(var i = 0, m = context.length; i < m; i++) {
			var item = context[i];

			str += '<li><a href="' + item.url + '"><div class="item-inner">' + item.label;

			if (item.icon != null) {
				str += '<img class="item-icon" src="' + item.icon + '"/>'; 
			} else {
				str += ' <i class="icon-chevron-right"></i>'
			}

			str += '</div></a></li>';
		}

		str += '</ul>';

		return new Handlebars.SafeString(str);
	});
});
