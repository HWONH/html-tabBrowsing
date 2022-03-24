$(document).ready(function() {
	$('.tablist li:first-of-type, .tabpanel:first-of-type').addClass('active');
	$('.tablist li button').on('click', function () {
		var num = $(this).parent().index();
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('.tabpanel').eq(num).show().siblings('.tabpanel').hide();
	});
});