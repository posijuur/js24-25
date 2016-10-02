;(function ($) {
	$.support.cors = true;
 
 $('.js-katalog-image').isotope({
 	itemSelector: '.js-katalog-image_item',
 	layoutMode: 'fitRows'
 });

	$.getJSON("http://api.pixplorer.co.uk/image?&amount=7&size=large",
		function(data){
			var $placeHolder = $('.js-block-image');
			var $tpl_src = $('#search-image').text();
			var _tpl = _.template($tpl_src);
			$placeHolder.html(_tpl(data));
		});

	$('.search-partner_submit').on('click', function(event) {
		event.preventDefault();
		var target = event.target;
		var valueInput = $('.search-partner_input').val();
		var removeValue = null;

		if (valueInput.length === 0) {
			return;
		}

        $.getJSON("http://api.pixplorer.co.uk/image?word="+valueInput+"&amount=7&size=large",
		function(data){
			var $placeHolder = $('.js-block-image');
			var $tpl_src = $('#search-image').text();
			var _tpl = _.template($tpl_src);
			$placeHolder.html(_tpl(data));
		});

		removeValue = $('.search-partner_input').val('');
	});

// masonry();	
})(jQuery);
