$(document).ready(function () {
	$("#submit").click(function () {
		preventFormSubmit();

		var pin = $("input[name='pin']").val();
		console.log(typeof pin);
	});
});