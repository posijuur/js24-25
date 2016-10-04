;(function ($) {
	$.support.cors = true;

	$.getJSON("http://api.pixplorer.co.uk/image?&amount=7&size=large",
		function(data){
			var $placeHolder = $(".js-block-image");
			var $tpl_src = $("#search-image").text();
			var tpl = _.template($tpl_src);
			$placeHolder.html(tpl(data));
		});

	setTimeout(function () {
		$(".js-katalog-image").masonry({
		  itemSelector: ".js-katalog-image_item",
		  columnWidth: 2
		});
	}, 1300);
	

	$(".search-partner_submit").on("click", function(event) {
		event.preventDefault();
		var target = event.target;
		var valueInput = $(".search-partner_input").val();
		var removeValue = null;

		if (valueInput.length === 0) {
			return;
		}

        $.getJSON("http://api.pixplorer.co.uk/image?word="+valueInput+"&amount=7&size=large",
		function(data){
			var $placeHolder = $(".js-block-image");
			var $tpl_src = $("#search-image").text();
			var _tpl = _.template($tpl_src);
			$placeHolder.html(_tpl(data));
		});

		setTimeout(function () {
			$(".js-katalog-image").masonry({
			  itemSelector: ".js-katalog-image_item",
			  columnWidth: 2
			});
		}, 1300);

		removeValue = $(".search-partner_input").val(" ");
	});

// masonry();	
})(jQuery);
