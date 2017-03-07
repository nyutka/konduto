 $(function(){
	$('.selectpicker').on('change', function () {
		var url = $(this).val();
		if (url) {
			window.location = url;
		}
		return false;
	});



	var $regForm = $('#form-registration');

	$regForm.submit(function(event) {
		event.preventDefault();

		var formData = $regForm.serializeArray().reduce(function(acc, cur) {
			acc[cur.name] = cur.value;
			return acc;
		}, {})

		var $loader = $regForm.find('#loading');
		var $submit = $regForm.find('.submit')
		
		$loader.removeClass('hidden');
		$submit.addClass('hidden');

		$.ajax({
			type        : 'GET',
			url         : 'https://hooks.zapier.com/hooks/catch/441374/m56vc3', // the url where we want to POST
			data        : formData,
			dataType    : 'json'
		})
		.done(function(data) {
			console.log(data);
			$loader.addClass('hidden');
			$('#success').removeClass('hidden');
		})

		.fail(function(response) {
			$loader.addClass('hidden');
			$('#danger').removeClass('hidden');
		});
	});

});